import http_views as views

urls = {
    '/api': views.api,
    '/get_fire': views.get_fire,
    '/vote_fire': views.vote_fire,
}

# choose between 0 and 6
logging_level = 4

allowed_hosts = ['127.0.0.1', 'stockmann.dev']

# tuple of (<address>,<port>)
address = ("", 83)