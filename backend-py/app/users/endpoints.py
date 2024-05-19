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
from app.auth.endpoints import get_current_active_user


# Init FastAPI router for API endpoints
users_routes = APIRouter()
client = ndb.Client()

@users_routes.post("/users", response_model=UserOut)
async def create_user(current_user: Annotated[User, Depends(get_current_active_user)],
                      user: UserCreate):
  with client.context():
    print(current_user)
  return User.create_entity(**user.dict())

@users_routes.get("/users/{user_id}", response_model=UserOut,)
async def get_user(user_id: str):
  user = User.get_by_urlsafe(key=user_id)
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  return user

@users_routes.put("/users/{user_id}", response_model=UserOut)
async def update_user(user_id: str, user_data: UserUpdate):
  user = User.update_entity(key=user_id,data=user_data)#
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  return user

@users_routes.delete("/users/{user_id}")
async def delete_user(user_id: str):
  user = User.delete_entity(user_id)
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  return {"message": "User deleted successfully"}

