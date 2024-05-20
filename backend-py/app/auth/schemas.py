"""
Primary API route endpoints

"""
from typing import List
from datetime import datetime
from fastapi import Body


from typing import Optional
from starlette.exceptions import HTTPException as StarletteHTTPException

from pydantic import BaseModel


from typing import Optional
'''
class UserBase(BaseModel):
  first_name: str
  last_name: str
  email: str
  #enabled: Optional[bool] = True

class UserCreate(UserBase):
  pass

class UserUpdate(UserBase):
  enabled: Optional[bool]

class UserOut(UserBase):
  id: str
  #insertion_date: datetime
  #update_date: datetime
  

  class Config:
    orm_mode = True
'''


class UserDto(BaseModel):
  first_name: str
  last_name: str
  email: str
  insertion_date : datetime = None
  update_date : datetime = None
  status:int
  roles: List[str] = []
  id:str
  disabled:bool