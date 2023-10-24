import app.http_settings as http_settings

prefixes = [
    '\033[0;0m[\033[;31me\033[0;0m] ',
    '\033[0;0m[\033[;33m!\033[0;0m] ',
    '\033[0;0m[\033[;32m+\033[0;0m] ',
    '\033[0;0m[\033[;34mi\033[0;0m] ',
    '\033[0;0m[\033[;36mv\033[0;0m] ',
    '\033[0;0m[\033[;35mV\033[0;0m] ',
    '\033[0;0m[\033[1;30md\033[0;0m] ',
]

verbosity = http_settings.logging_level


def log(level, msg, pre='', end='\n'):
    if level <= verbosity:
        print(pre + prefixes[level] + msg, end=end)
