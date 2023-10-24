import app.http_settings as http_settings

prefixes = [
    '\033[0;0m[\033[;31me\033[0;0m] ',
    '\033[0;0m[\033[;33m!\033[0;0m] ',
    '\033[0;0m[\033[;32m+\033[0;0m] ',
    '\033[0;0m[\033[;34mi\033[0;0m] ',
    '\033[0;0m[\033[;36mv\033[0;0m] ',
    '\033[0;0m[\033[;35mV\033[0;0m] ',
    '\033[0;0m[\033[;30md\033[0;0m] ',
]

colors = {
    'black': '\033[;30m',
    'red': '\033[;31m',
    'green': '\033[;32m',
    'yellow': '\033[;33m',
    'blue': '\033[;34m',
    'pink': '\033[;35m',
    'cyan': '\033[;36m',
    'white': '\033[;37m',
    'bblack': '\033[;90m',
    'bred': '\033[;91m',
    'bgreen': '\033[;92m',
    'byellow': '\033[;93m',
    'bblue': '\033[;94m',
    'bpink': '\033[;95m',
    'bcyan': '\033[;96m',
    'bwhite': '\033[;97m',
}

verbosity = 6

def log(level, msg, pre='', end='\n', named='', bypass=False):
    if level <= verbosity or bypass:
        print(pre + ('['+named+'\033[0;0m]' if named else '') + prefixes[level] + msg, end=end)

def create_log(name, color):
    return lambda level, msg, pre='', end='\n', bypass=False: log(level=level, msg=msg, pre=pre, end=end, bypass=bypass, named=colors[color]+name)