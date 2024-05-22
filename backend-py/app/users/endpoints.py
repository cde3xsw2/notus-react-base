from datetime import datetime, timedelta, timezone

from fastapi import APIRouter
from fastapi import HTTPException

from google.cloud import ndb
from app.permissions.models import BranchRole

from .schemas import UserOut, UserCreate, UserUpdate
from .models import User, UserStatus

from typing import Annotated, Union, List

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext
from app.auth.endpoints import get_current_active_user
from app.auth.utils import CurrentUser
from app.permissions.models import EntityPermission

# Init FastAPI router for API endpoints
users_routes = APIRouter()
client = ndb.Client()


def validate_perms(validate_perms_fn, entity, with_roles):
    roles = BranchRole.ids_to_keys(with_roles)
    if not validate_perms_fn(entity=entity, with_roles=roles):
        raise HTTPException(status_code=401, detail="Access denied")


@users_routes.post("/users", response_model=UserOut)
async def create_user(current_user: CurrentUser, user: UserCreate):
    validate_perms(
        EntityPermission.can_create, entity="User", with_roles=current_user.roles
    )
    return User.create_entity(**user.dict())


@users_routes.get(
    "/users/{user_id}",
    response_model=UserOut,
)
async def get_user(current_user: CurrentUser, user_id: str):
    validate_perms(
        EntityPermission.can_read, entity="User", with_roles=current_user.roles
    )

    user = User.get_by_urlsafe(key=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@users_routes.put("/users/{user_id}", response_model=UserOut)
async def update_user(current_user: CurrentUser, user_id: str, user_data: UserUpdate):
    validate_perms(
        EntityPermission.can_update, entity="User", with_roles=current_user.roles
    )
    user = User.update_entity(key=user_id, data=user_data)  #
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@users_routes.delete("/users/{user_id}")
async def delete_user(current_user: CurrentUser, user_id: str):
    validate_perms(
        EntityPermission.can_delete, entity="User", with_roles=current_user.roles
    )
    user = User.delete_entity(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted successfully"}
