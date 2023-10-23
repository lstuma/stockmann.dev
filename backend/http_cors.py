from http_utils import JSONRequest, JSONResponse
import http_settings

def get_headers(request: JSONRequest):
    cors_headers = {
        'Access-Control-Allow-Credentials' : http_settings.allow_credentials,
    }
    if '*' in http_settings.allowed_origins:
        cors_headers['Access-Control-Allow-Origin'] = '*'
    elif request.headers('Origin') in http_settings.allowed_origins:
        cors_headers['Access-Control-Allow-Origin'] = request.headers('Origin')
    return cors_headers