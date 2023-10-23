import http_views as views

# URLS
urls = {
    '/api': views.api,
    '/get_fire': views.get_fire,
    '/vote_fire': views.vote_fire,
}

# VERBOSITY (0-6)
logging_level = 4

# ALLOWED_HOSTS
allowed_hosts = ['127.0.0.1', 'api.stockmann.dev']

# CORS
allowed_origins = ['http://api.stockmann.dev', 'http://stockmann.dev', 'https://stockmann.dev', 'http://127.0.0.1:3000', 'http://localhost:3000']
allow_credentials = 'false'

# ADRESS tuple of (<address>,<port>)
address = ("", 80)