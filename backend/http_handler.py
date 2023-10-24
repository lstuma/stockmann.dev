from logger import log
from http_utils import JSONRequest, JSONResponse
import http_cors
import app.http_settings as http_settings
import traceback


def handle_request(connection, client_address):
    log(5, f"treating connection from {client_address[0]}:{client_address[1]} as HTTP request")

    try:
        # receive request
        request = str(connection.recv(4096), 'utf-8')
        log(3, f'received request')

        # parse request
        json_request = JSONRequest.from_str(request)
        log(3, f'request: {json_request.path}')
        log(6, f'JSONRequest:\n{json_request}')
       
       # check whether host header is allowed
        if '*' in http_settings.allowed_hosts or json_request.headers('Host') in http_settings.allowed_hosts:
            log(3, 'valid host header')
        else:
            log(3, 'invalid host header')

        # check whether resource exists
        if json_request.path in http_settings.urls:
            log(2, f'found matching path for {json_request.path}')

            # get response
            json_response: JSONResponse = http_settings.urls[json_request.path](json_request)

            # add cors headers
            json_response.set_headers(http_cors.get_headers(json_request))

            # render response
            response = json_response.render()
            log(6, f'Response:\n{response}')

            # send response
            connection.sendall(response)
            log(2, f'sent response to {client_address[0]}:{client_address[1]}')
        else:
            log(5, f'could not find matching path for {json_request.path}')

    except Exception as ex:
        log(0, f'an error occured: \033[;31m{ex}\033[0;0m\n' + ''.join(traceback.format_tb(ex.__traceback__)))
        log(3, 'error not critical - continueing')
