import logger
import socket
import ssl

# create log
log = logger.create_log(name='HTTPSECURE', color='bpink')

def make_secure(sock, hostname, cert_path, privatekey_path, password=None):
    if password: pass_func = lambda: password
    else: pass_func = ask_password
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    try:
        ssl_context.load_cert_chain(certfile=cert_path, keyfile=privatekey_path, password=pass_func)
    except FileNotFoundError:
        log(0, 'failed to secure socket', bypass=True)
        log(0, 'cert_path or privatekey_path invalid!', bypass=True)
        return None
    secure_sock = ssl_context.wrap_socket(sock, server_side=True)
    return secure_sock
    
def ask_password():
    log(0, 'failed to decrypt keyfile')
    log(1, 'password required to decrypt keyfile!', bypass=True)
    input('\033[;31mPASSWORD FOR KEYFILE: \033[0;0m]')
