import json

class JSONRequest:
    def __init__(self, method, path, headers, body, get=''):
        self.method = method
        self.path = path
        self._post = body
        self._get = get
        self.HEADERS = headers
        self.GET, self.POST = {}, {}
        self.gen_method_array()

    @classmethod
    def from_str(cls, str):
        # returns a Request object from a HTTP request string
        # http request headers
        lines = str.replace('\r', '').split('\n')[1:]
        split_line = lines.index('')
        _headers = lines[:split_line]
        headers = {}
        for header in _headers:
            colon_i = header.index(':')
            headers[header[0:colon_i].strip()] = header[colon_i+1:].strip()

        # parse headers
        if str.startswith('GET'):
            method = 'GET'
            body = ''
        #  parse headers + body
        elif str.startswith('POST'):
            method = 'POST'
            body = ''.join(lines[split_line:])
        else:
            raise NotImplementedError

        # parse url
        path = str[len(method) + 1:str.find('HTTP/1.')].split('?') + ['']
        get_params = path[1]
        path = path[0]
        return JSONRequest(method=method, path=path, headers=headers, body=body, get=get_params)

    def gen_method_array(self):
        # generates a dictionary obj['<METHOD>'] with all args sent
        if self._get:
            params = [params.split('=') for params in self._get.split('&')]
            self.GET = {param[0]: param[1] for param in params}
        if self._post:
            self.POST = json.loads(self._post)

    def get(self, key):
        if key in self.GET:
            return self.GET[key]
        else:
            return None

    def post(self, key):
        if key in self.POST:
            return self.POST[key]
        else:
            return None

    def headers(self, key):
        if key in self.HEADERS:
            return self.HEADERS[key]
        else:
            return None

    def __str__(self):
        return f'{self.method} {self.path}?{self._get} HTTP/1.0\n' + \
            f'{self.HEADERS}\n' + \
            f'{self.POST}\n' + \
            f'{self.GET}'


class JSONResponse:
    def __init__(self, body, headers={}, status=200):
        # preamble
        self.preamble = 'HTTP/1.0 '
        self.status = STATUS[status]
        # standard headers
        self.headers = {}
        self.headers['Content-Type'] = 'application/json'
        # custom headers
        self.set_headers(headers)
        # body
        self.body = body

    def set_headers(self, headers):
        # set a dictionary of headers
        for k, v in headers.items():
            self.headers[k] = v

    def render(self):
        # render body to string
        render_body = json.dumps(self.body).replace('\n', '\n\r')
        # render headers to string
        render_headers = ''
        self.headers['Content-Length'] = str(len(self.body))
        for k, v in self.headers.items():
            render_headers += k+': '+v+'\r\n'
        return (self.preamble + self.status + '\r\n' + render_headers + '\r\n\r\n' + render_body).encode('utf-8')

    def __str__(self):
        return self.render().replace('\r', '\\r')


# constants

STATUS = {
    # informational
    100: '100 Continue',
    101: '101 Switching Protocols',
    103: '103 Early Hints',
    # successful
    200: '200 OK',
    201: '201 Created',
    202: '202 Accepted',
    203: '203 Non-Authoritative Information',
    204: '204 No Content',
    205: '205 Reset Content',
    206: '206 Partial Content',
    # redirection
    300: '300 Multiple Choices',
    301: '301 Moved Permanently',
    302: '302 Found',
    303: '303 See Other',
    304: '304 Not Modified',
    307: '307 Temporary Redirect',
    308: '308 Permanent Redirect',
    # client error
    400: '400 Bad Request',
    401: '401 Unauthorized',
    402: '402 Payment Required Experimental ',
    403: '403 Forbidden',
    404: '404 Not Found',
    405: '405 Method Not Allowed',
    406: '406 Not Acceptable',
    407: '407 Proxy Authentication Required',
    408: '408 Request Timeout',
    409: '409 Conflict',
    410: '410 Gone',
    411: '411 Length Required',
    412: '412 Precondition Failed',
    413: '413 Payload Too Large',
    414: '414 URI Too Long',
    415: '415 Unsupported Media Type',
    416: '416 Range Not Satisfiable',
    417: '417 Expectation Failed',
    418: '418 I\'m a teapot',
    421: '421 Misdirected Request',
    425: '425 Too Early',
    426: '426 Upgrade Required',
    428: '428 Precondition Required',
    429: '429 Too Many Requests',
    431: '431 Request Header Fields Too Large',
    451: '451 Unavailable For Legal Reasons',
    # server error
    500: '500 Internal Server Error',
    501: '501 Not Implemented',
    502: '502 Bad Gateway',
    503: '503 Service Unavailable',
    504: '504 Gateway Timeout',
    505: '505 HTTP Version Not Supported',
    506: '506 Variant Also Negotiates',
    510: '510 Not Extended',
    511: '511 Network Authentication Required',
}