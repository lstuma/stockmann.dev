import app.http_views as views

# URLS
urls = {
    '/api': views.api,
    '/get_fire': views.get_fire,
    '/vote_fire': views.vote_fire,
}

# VERBOSITY (0-6)
VERBOSITY = 4

# PROTOCL HTTP / HTTPS
USE_HTTPS = True
CERT_PATH = '/etc/letsencrypt/live/api.stockmann.dev/fullchain.pem'
PRIVKEY_PATH = '/etc/letsencrypt/live/api.stockmann.dev/privkey.pem'
PRIVKEY_DECRYPT_PASSWD = ''
HTTPS_HOSTNAME = 'api.stockmann.dev'

# ALLOWED_HOSTS
ALLOWED_HOSTS = ['127.0.0.1', 'api.stockmann.dev']

# CORS
ALLOWED_ORIGINS = ['*', 'http://api.stockmann.dev', 'http://stockmann.dev', 'https://stockmann.dev', 'http://127.0.0.1:3000', 'http://localhost:3000']
ALLOW_CREDENTIALS = False

# ADDRESS and PORT (empty address opens on all interfaces)
ADDRESS = ""
PORT = 443