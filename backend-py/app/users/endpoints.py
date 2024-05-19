from datetime import datetime, timedelta, timezone

from fastapi import APIRouter
from fastapi import HTTPException

from google.cloud import ndb


from .schemas import UserOut,UserCreate,UserUpdate
from .models import User,UserStatus

from typing import Annotated, Union

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext


# Init FastAPI router for API endpoints
users_routes = APIRouter()

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

client = ndb.Client()


@users_routes.post("/users", response_model=UserOut)
async def create_user(user: UserCreate):
  with client.context():
    new_user = User(**user.dict())  # Convert UserCreate to User model
    new_user.put()
  return new_user


@users_routes.get("/users/{user_id}", 
            status_code=201,
            response_model=UserOut,
)
async def get_user(user_id: str):
  with client.context():
    user = User.get_by_key(user_id)
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  return user

@users_routes.put("/users/{user_id}", response_model=UserOut)
async def update_user(user_id: int, user_data: UserUpdate):
  with client.context():
    user = User.query(User.id == user_id).get_async()
    if not user:
      raise HTTPException(status_code=404, detail="User not found")
    user.update(**user_data.dict())  # Update user model with new data
    user.put()
  return user

@users_routes.delete("/users/{user_id}")
async def delete_user(user_id: int):
  with client.context():
    #user = User.query(User.id == user_id).get_async()
    user = User.query(User.id == user_id).get_async()
    #ndb.Key('MyModel')
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  user.key.delete()
  return {"message": "User deleted successfully"}

