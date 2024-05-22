from fastapi import APIRouter
from fastapi import HTTPException

from google.cloud import ndb


from .schemas import UserOut, UserCreate, UserUpdate
from .models import User

client = ndb.Client()


# Init FastAPI router for API endpoints
api_routes = APIRouter()
