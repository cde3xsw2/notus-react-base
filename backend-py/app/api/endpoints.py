"""
Primary API route endpoints

"""
from starlette.responses import RedirectResponse
from fastapi import APIRouter, FastAPI, Body#HTTPException,
from google.cloud import ndb

client = ndb.Client()

# [START greeting]
class Greeting(ndb.Model):
    """Models an individual Guestbook entry with content and date."""

    content = ndb.StringProperty()
    date = ndb.DateTimeProperty(auto_now_add=True)
    # [END greeting]

    # [START query]
    with client.context():

        @classmethod
        def query_book(cls, ancestor_key):
            return cls.query(ancestor=ancestor_key).order(-cls.date)
        
        
# Init FastAPI router for API endpoints
#api_routes = APIRouter()
api_routes = APIRouter()


@api_routes.get('/')
def redirect_to_docs():
    """Redirect to API docs when at site root"""
    return RedirectResponse('/redoc')


@api_routes.get('/hello/{name}')
async def get_hello(name: str = 'world'):
    return dict(hello=name)

@api_routes.get('/second/{name}')
async def get_second(name: str = 'world'):
    with client.context():
        ancestor_key = ndb.Key("Book", name or "*notitle*")
        greetings = Greeting.query_book(ancestor_key).fetch(20)
        print(len(greetings))
        if greetings:
            print(vars(greetings[0]))
            print('id '+str(greetings[0].key.id()))
    return dict(hello=name)

@api_routes.get('/third/{name}')
async def get_third(name: str = 'world'):
    with client.context():
        greeting = Greeting(
            parent=ndb.Key("Book", name or "*notitle*"),
            content='random content'#request.form.get("content", None),
        )
        greeting.put()
        #print(len(greetings))
    return dict(hello=name)