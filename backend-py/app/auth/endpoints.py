from datetime import datetime, timedelta, timezone

from fastapi import APIRouter
from fastapi import HTTPException

from google.cloud import ndb


from app.users.schemas import UserOut,UserCreate,UserUpdate
from app.users.models import User as UserInDB, User as User2

from typing import Annotated, Union

from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import JWTError, jwt
from passlib.context import CryptContext
from .schemas import UserDto

client = ndb.Client()

# Init FastAPI router for API endpoints
auth_routes = APIRouter()

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False,
    }
}
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    key_urlsafe: Union[str, None] = None
    

    
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)

def authenticate_user(username: str, password: str):
    user = get_user( username)
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user    

def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
  
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        key_urlsafe: str = payload.get("sub")
        if key_urlsafe is None:
            raise credentials_exception
        token_data = TokenData(key_urlsafe=key_urlsafe)
    except JWTError:
        raise credentials_exception
    #user = get_user2(fake_users_db, username=token_data.username)
    user = get_user_by_urlsafe(key=token_data.key_urlsafe)
    if user is None:
        raise credentials_exception
    return user


def get_user_by_urlsafe(key:bytes):
    from app.users.models import User
    print('get_user_by_urlsafe')
    print(key)
    #print(str(key))
    with client.context():
        return ndb.Key(urlsafe=key).get()
        #return ndb.Key(urlsafe=key.decode('ascii')).get()
    
def get_user(email: str):
    from app.users.models import User
    with client.context():
        return User.query(User.email==email).get()
    


async def get_current_active_user(
    current_user: Annotated[User2, Depends(get_current_user)],
):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    with client.context():
        return UserDto(id=current_user.id,
                        disabled=current_user.disabled,
                        email=current_user.email,
                        first_name=current_user.first_name,
                        insertion_date=current_user.insertion_date,
                        last_name=current_user.last_name,
                        roles=current_user.roles,
                        status=current_user.status,
                        update_date=current_user.update_date,
                        )


@auth_routes.post("/token")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    user = authenticate_user(form_data.username, form_data.password)#fake_users_db, 
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    key_urlsafe = user.key.urlsafe().decode('ascii')
    access_token = create_access_token(
        data={"sub": key_urlsafe}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")

@auth_routes.get("/auth/users/me",response_model=UserOut )
async def read_users_me(
    current_user: Annotated[User2, Depends(get_current_active_user)],
):
    print('read_users_me...')
    #print(current_user)
    return current_user
  
@auth_routes.get("/users/me/items/")
async def read_own_items(
    current_user: Annotated[User2, Depends(get_current_active_user)],
):
    return [{"item_id": "Foo", "owner": current_user.username}]
