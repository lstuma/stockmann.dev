from http_utils import JSONRequest, JSONResponse
import service.fire as fire

def api(request: JSONRequest):
    # test api endpoint
    return JSONResponse(body={'status': 'OK', 'test1': 'test2', 'test3': request.POST['Customer']})

def get_fire(request: JSONRequest):
    # get fire upvotes for blog article
    # check method
    if request.method != 'GET': return JSONResponse(body={'status': 'ERROR', 'reason': 'method not allowed'})
    # get article id
    article_id = request.get('id')
    if not article_id: return JSONResponse(body={'status': 'ERROR', 'reason': 'no id set'})
    try: article_id = int(article_id)
    except Exception: return JSONResponse(body={'status': 'ERROR', 'reason': 'type conversion failed'})
    # get fires
    fires = fire.firestat(article_id)
    return JSONResponse(body={'status': 'OK', 'fire': fires})

def vote_fire(request: JSONRequest):
    # vote on blog article
    # check method
    if request.method != 'GET': return JSONResponse(body={'status': 'ERROR', 'reason': 'method not allowed'})
    # get article id
    article_id = request.get('id')
    if not article_id: return JSONResponse(body={'status': 'ERROR', 'reason': 'no id set'})
    try: article_id = int(article_id)
    except Exception: return JSONResponse(body={'status': 'ERROR', 'reason': 'type conversion failed'})
    # get fires
    fires = fire.votefire(article_id)
    return JSONResponse(body={'status': 'OK'})