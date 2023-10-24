from http_utils import JSONRequest, JSONResponse
import app.http_settings as http_settings

def get_headers(request: JSONRequest):
    cors_headers = {
        'Access-Control-Allow-Credentials' : str(http_settings.ALLOW_CREDENTIALS),
    }
    if '*' in http_settings.ALLOWED_ORIGINS:
        cors_headers['Access-Control-Allow-Origin'] = '*'
    elif request.headers('Origin') in http_settings.ALLOWED_ORIGINS:
        cors_headers['Access-Control-Allow-Origin'] = request.headers('Origin')
    return cors_headers