from logger import log
from http_utils import JSONRequest, JSONResponse
import http_settings
import traceback


def handle_request(connection, client_address):
    log(5, f"treating connection from {client_address[0]}:{client_address[1]} as HTTP request")

    try:
        request = str(connection.recv(4096), 'utf-8')
        log(2, f'received request')

        json_request = JSONRequest.from_str(request)
        log(6, f'JSONRequest:\n{json_request}')
       
        if '*' in http_settings.allowed_hosts or json_request.headers['Host'] in http_settings.allowed_hosts:
            log(2, 'valid host header')
        else:
            log(3, 'invalid host header')

        if json_request.path in http_settings.urls:
            log(2, f'found matching path for {json_request.path}')
            json_response: JSONResponse = http_settings.urls[json_request.path](json_request)
            response = json_response.render()
            log(6, f'Response:\n{response}')
            connection.sendall(response)
            log(2, f'sent response to {client_address[0]}:{client_address[1]}')
        else:
            log(5, f'could not find matching path for {json_request.path}')

    except Exception as ex:
        log(0, f'a fatal error occured: \033[;31m{ex}\033[0;0m\n' + ''.join(traceback.format_tb(ex.__traceback__)))
        log(3, 'error not critical - continueing')
