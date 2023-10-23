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
    def __init__(self, body, headers={}, status='200 OK'):
        # preamble
        self.preamble = 'HTTP/1.0 '
        self.status = status
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
