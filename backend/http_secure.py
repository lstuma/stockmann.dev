import logger
import socket
import ssl

# create log
log = logger.create_log(name='HTTPSECURE', color='bpink')

def make_secure(sock, cert_path, privatekey_path, password=None):
    # privkey password-policy
    if not password: password = ask_password

    # ssl context for wrapping socket (tls)
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    try:
        log(3, f'loading tls certificate from {cert_path}')
        ssl_context.load_verify_locations(cert_path)
        log(3, f'loading tls private key from {privatekey_path}')
        ssl_context.load_cert_chain(certfile=cert_path, keyfile=privatekey_path, password=password)
    except FileNotFoundError:
        log(0, 'cert_path or privatekey_path invalid!', bypass=True)
        log(0, 'failed to secure socket', bypass=True)
        return None
    secure_sock = ssl_context.wrap_socket(sock, server_side=True)
    return secure_sock
    
def ask_password():
    log(1, 'password required to decrypt keyfile!', bypass=True)
    log(0, 'failed to decrypt keyfile')
    input('\033[;31mPASSWORD FOR KEYFILE: \033[0;0m]')
