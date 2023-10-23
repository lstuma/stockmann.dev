import socket
from logger import log
import http_handler
import http_settings
import traceback

#
# settings:
#

allowed_hosts = http_settings.allowed_hosts
address = http_settings.address
handle_connection = http_handler.handle_request

# ========================== END


def run_server():
    global sock
    
    log(4, "starting server..")
    
    log(5, "creating socket")
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    
    log(3, f'trying {address[0] if address[0] else "all interfaces"}')
    log(3, f'trying port {address[1]}')
    
    log(5, 'binding socket')
    sock.bind(address)

    log(5, 'start listening')
    sock.listen()
    log(2, f'now listening on {address[0] if address[0] else "127.0.0.1/0"}:{address[1]}')

    while True:
        connection, client_address = sock.accept()
        log(5, f'received connection from {client_address[0]}:{client_address[1]}')
        
        handle_connection(connection, client_address)


if __name__ == '__main__':
    global sock
    
    log(3, 'configuring..')
    http_handler.allowed_hosts = allowed_hosts
    log(2, 'configuration done!')
    
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
        log(0, f'a fatal error occured: \033[;31m{e}\033[0;0m\n' + ''.join(traceback.format_tb(e.__traceback__)))
    