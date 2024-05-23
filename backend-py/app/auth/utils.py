from typing import Annotated
from typing import List

from fastapi import Depends
from .endpoints import get_current_active_user
from datetime import datetime
from pydantic import BaseModel
from .schemas import UserDto


CurrentUser = Annotated[UserDto, Depends(get_current_active_user)]
