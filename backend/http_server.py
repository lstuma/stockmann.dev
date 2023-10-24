import socket
import logger
import http_secure
import http_handler
import app.http_settings as http_settings
import traceback

log = logger.create_log(name='SERVER', color='bcyan')

def run_server():
    global sock
    
    log(4, "starting server ...")
    
    log(4, "creating socket")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    log(3, f'trying {address[0] if address[0] else "all interfaces"}')
    log(3, f'trying port {address[1]}')
    
    log(5, 'binding socket')
    sock.bind(address)

    log(5, 'start listening')
    sock.listen()
    log(2, f'now listening on {address[0] if address[0] else "any"}:{address[1]}')

    if http_settings.USE_HTTPS:
        log(3, 'securing sockets...')
        secure_sock = http_secure.make_secure(sock, cert_path, privkey_path, privkey_password)
        # check if securing socket was successfull
        if not secure_sock:
            log(0, 'securing sockets failed!')
            return

        sock = secure_sock
        log(2, 'successfully secured sockets!')

    else:
        log(3, 'using http (insecure sockets)')

    while True:
        connection, client_address = sock.accept()
        log(5, f'received connection from {client_address[0]}:{client_address[1]}')
        
        handle_connection(connection, client_address)


if __name__ == '__main__':
    global sock
    
    log(3, 'configuring settings')

    # configure local
    global allowed_hosts, address, handle_connection, use_https, certpath, privkeypath, privkey_password, https_hostname
    allowed_hosts = http_settings.ALLOWED_HOSTS
    address = (http_settings.ADDRESS, http_settings.PORT)
    handle_connection = http_handler.handle_request
    use_https = http_settings.USE_HTTPS
    cert_path = http_settings.CERT_PATH
    privkey_path = http_settings.PRIVKEY_PATH
    privkey_password = http_settings.PRIVKEY_DECRYPT_PASSWD
    https_hostname = http_settings.HTTPS_HOSTNAME

    # configure external
    http_handler.allowed_hosts = allowed_hosts
    logger.verbosity = http_settings.VERBOSITY

    # log configuration settings
    log(2,
        "continueing with settings:\n"+\
        "\tVERBOSITY: \033[;32m" + str(logger.verbosity) + "\033[0;0m\n" +\
        "\tUSE HTTPS: " + ('\033[;32mTRUE' if use_https else '\033[;31mFALSE') + "\033[0;0m\n" +\
        "\t - CERT PATH: \033[;32m" + (cert_path if cert_path else '\033[;31mNONE') + "\033[0;0m\n" +\
        "\t - PRIVKEY PATH: \033[;32m" + (privkey_path if privkey_path else '\033[;31mNONE') + "\033[0;0m\n" +\
        "\t - PRIVKEY PASSWD POLICY: \033[;32m" + ('\033[;32mPROVIDED' if privkey_password else '\033[;31mASK') + "\033[0;0m\n" +\
        "\t - HTTPS HOSTNAME: \033[;32m" + (https_hostname if https_hostname else '\033[;31mNONE') + "\033[0;0m\n" +\
        "\tALLOWED HOSTS: \033[;32m" + str(allowed_hosts) + "\033[0;0m\n" +\
        "\tCORS ALLOWED ORIGINS: \033[;32m" + str(http_settings.ALLOWED_ORIGINS) + "\033[0;0m\n" +\
        "\tCORS ALLOW CREDENTIALS: " + ('\033[;32mTRUE' if str(http_settings.ALLOW_CREDENTIALS) else '\033[;31mFALSE') + "\033[0;0m\n" +\
        "\tADDRESS: \033[;32m" + (address[0] if address[0] else 'ANY') + "\033[0;0m\n" +\
        "\tPORT: \033[;32m" + str(address[1]) + "\033[0;0m\n"
    )

    
    try:
        run_server()
    except KeyboardInterrupt:
        sock.shutdown(socket.SHUT_RDWR)
        sock.close()
        log(0, 'exiting!', pre='\n')
    except Exception as e:
        try:
            sock.shutdown(socket.SHUT_RDWR)
        finally:
            pass
        sock.close()
        log(0, f'fatal error occured: \033[;31m{e}\033[0;0m\n' + ''.join(traceback.format_tb(e.__traceback__)))
    