# stockmann.dev
Personal Website and Blog Site run by [@lstuma](https://github.com/lstuma)

Visit site at [stockmann.dev](https://stockmann.dev)

## Frontend
| tech stack |
| :--------: |
| react (js+html+css) |

## Backend
| tech stack |
| :--------: |
| python |

### Documentation
#### app.http_settings
 - contains settings for web server
#### http_server
 - contains socket handling and forwards them to `http_handler.handle_request(...)`
#### http_handler
 - handles connections and forward requests to callbacks defined in `app.http_settings.urls`
 - will compare Hosts header to `app.http_settings.allowed_hosts`
 - will compare possible Origin header to `app.http_settings.allowed_origins`
#### http_utils
 - contains classes `JSONRequest` and `JSONResponse`
 - contains constans (`STATUS`)

**class `http_utils.JSONRequest`**

func `JSONRequest.__init__(self, method, path, headers, body, get='')`:
 - `str: method`: request method (`GET`|`POST`)
 - `str path`: requested path (e.g. `/api/test1`)
 - `dict headers`: headers of request
 - `str: body`: body of request
 - `str: get`: get parameters in request (e.g. `test1=1&test2=2`)
 - *returns*: a JSONRequest object

func `@classmethod` `JSONRequest.from_str(cls, str)`:
 - `str: str`: the entire http request as a string
 - *returns*: a JSONRequest object

func `JSONRequest.get(self, key)`:
 - `key`: get parameter name
 - *returns*: returns value of get parameter if any, otherwise None

func `JSONRequest.post(self, key)`:
 - `key`: post parameter name
 - *returns*: returns value of post parameter if any, otherwise None

func `JSONRequest.headers(self, key)`:
 - `key`: header name
 - *returns*: returns value of header if any, otherwise None

**class `http_utils.JSONResponse`**

func `JSONResponse.__init__(self, body, headers={}, status=200)`:
 - `body`: response body
 - `dict: headers`: response headers
 - `int: status`: response status code
 - *returns*: a JSONResponse object

func `JSONResponse.set_headers(self, headers)`:
 - `dict: headers`: headers to overwrite
 - Overwrites any headers mentioned `headers`
 - *returns*: void

func `JSONResponse.render(self)`:
 - Renders the request into a valid string that can be sent to client
 - *returns*: rendered request

#### logger
 - used to print log messages to stdout

func `logger.log(level, msg, pre='', end='\n')`:
    `int: level`: verbosity level, needs to be in range of 0-6
    `str: msg`: message to log
    `str: pre`: prefix before verbosity indicator
    `str: end`: suffix after log message
    Prints a log message to *stoud* following the provided verbosity level.
    Possible verbosity levels:
        0. error
        1. warning
        2. success
        3. info
        4. verbose
        5. very verbose
        6. debug
    *returns*: void