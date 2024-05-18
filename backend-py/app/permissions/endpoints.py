from fastapi import APIRouter
from fastapi import HTTPException

from google.cloud import ndb


from .schemas import UserOut,UserCreate,UserUpdate
from .models import User

client = ndb.Client()


# Init FastAPI router for API endpoints
api_routes = APIRouter()


'''@api_routes.post("/users", response_model=UserOut)
async def create_user(user: UserCreate):
  with client.context():
    new_user = User(**user.dict())  # Convert UserCreate to User model
    new_user.put()
    #new_user.id=new_user.key.urlsafe()
  return new_user


@api_routes.get("/users/{user_id}", 
            status_code=201,
            response_model=UserOut,
)
async def get_user(user_id: str):
  with client.context():
    user = User.get_by_key(user_id)
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  return user

@api_routes.put("/users/{user_id}", response_model=UserOut)
async def update_user(user_id: int, user_data: UserUpdate):
  with client.context():
    user = User.query(User.id == user_id).get_async()
    if not user:
      raise HTTPException(status_code=404, detail="User not found")
    user.update(**user_data.dict())  # Update user model with new data
    user.put()
  return user

@api_routes.delete("/users/{user_id}")
async def delete_user(user_id: int):
  with client.context():
    #user = User.query(User.id == user_id).get_async()
    user = User.query(User.id == user_id).get_async()
    #ndb.Key('MyModel')
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  user.key.delete()
  return {"message": "User deleted successfully"}'''