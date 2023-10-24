


# Documentation

## app.http_settings .py
##### Description:
contains settings for web server

## http_server .py
##### Description:
contains socket handling and forwards them to `http_handler.handle_request(...)`

## http_handler .py
##### Description:
handles connections and forward requests to callbacks defined in `app.http_settings.urls`
will compare Hosts header to `app.http_settings.allowed_hosts`
will compare possible Origin header to `app.http_settings.allowed_origins`

## http_utils .py
##### Description:
contains classes `JSONRequest` and `JSONResponse`
contains constans (`STATUS`)

---
### *class* http_utils.JSONRequest:

##### JSONRequest.\_\_init\_\_(self, method, path, headers, body, get=''):
`str: method`: request method (`GET`|`POST`)
`str path`: requested path (e.g. `/api/test1`)
`dict headers`: headers of request
`str: body`: body of request
`str: get`: get parameters in request (e.g. `test1=1&test2=2`)

**returns**: a JSONRequest object

<br />
<br />

#####  @classmethod JSONRequest.from_str(cls, str):
`str: str`: the entire http request as a string

**returns**: a JSONRequest object

<br />
<br />

#####  JSONRequest.get(self, key):
`key`: get parameter name

**returns**: returns value of get parameter if any, otherwise None

<br />
<br />

#####  JSONRequest.post(self, key):
`key`: post parameter name \s

**returns**: returns value of post parameter if any, otherwise None

<br />
<br />

#####  JSONRequest.headers(self, key):
`key`: header name

**returns**: returns value of header if any, otherwise None

---
### *class* http_utils.JSONResponse:

#####  JSONResponse.\_\_init\_\_(self, body, headers={}, status=200):
`body`: response body
`dict: headers`: response headers
`int: status`: response status code

**returns**: a JSONResponse object

<br />
<br />

#####  JSONResponse.set_headers(self, headers):
`dict: headers`: headers to overwrite

Overwrites any headers mentioned `headers`

**returns**: void

<br />
<br />

#####  JSONResponse.render(self):
Renders the request into a valid string that can be sent to client

**returns**: rendered request

## logger .py
##### Description:
used to print log messages to stdout

---
##### log(level, msg, pre='', end='\n'):
`int: level`: verbosity level, needs to be in range of 0-6
`str: msg`: message to log
`str: pre`: prefix before verbosity indicator
`str: end`: suffix after log message
Prints a log message to *stdoud* following the provided verbosity level.
Possible verbosity levels:
- `0` : error
- `1` :warning
- `2` :success
- `3` :info
- `4` :verbose
- `5` :very verbose
- `6` :debug
**returns**: void
