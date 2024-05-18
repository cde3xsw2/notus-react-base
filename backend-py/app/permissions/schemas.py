"""
Primary API route endpoints

"""

from datetime import datetime
from fastapi import Body


from typing import Optional
from starlette.exceptions import HTTPException as StarletteHTTPException

from datetime import datetime
from pydantic import BaseModel


from typing import Optional

'''class UserBase(BaseModel):
  first_name: str
  last_name: str
  email: str
  enabled: Optional[bool] = True

class UserCreate(UserBase):
  pass

class UserUpdate(UserBase):
  enabled: Optional[bool]

class UserOut(UserBase):
  id: str
  insertion_date: datetime
  update_date: datetime
  

  class Config:
    orm_mode = True
'''