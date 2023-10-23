from http_utils import JSONRequest, JSONResponse
import service.fire as fire

def api(request: JSONRequest):
    # test api endpoint
    return JSONResponse(body={'mirror_key':request.get('key')}, status=418)

def get_fire(request: JSONRequest):
    # get fire upvotes for blog article
    # check method
    if request.method != 'GET': return JSONResponse(body={'reason': 'method not allowed'}, status=405)
    # get article id
    article_id = request.get('id')
    if not article_id: return JSONResponse(body={'reason': 'no id set'}, status=400)
    try: article_id = int(article_id)
    except Exception: return JSONResponse(body={'reason': 'type conversion failed'}, status=400)
    # get fires
    fires = fire.firestat(article_id)
    return JSONResponse(body={'fire': fires}, status=200)

def vote_fire(request: JSONRequest):
    # vote on blog article
    # check method
    if request.method != 'GET': return JSONResponse(body={'reason': 'method not allowed'}, status=405)
    # get article id
    article_id = request.get('id')
    if not article_id: return JSONResponse(body={'reason': 'no id set'}, status=400)
    try: article_id = int(article_id)
    except Exception: return JSONResponse(body={'reason': 'type conversion failed'}, status=400)
    # get fires
    fires = fire.votefire(article_id)
    return JSONResponse(body={}, status=200)