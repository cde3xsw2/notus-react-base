"""
Primary API route endpoints

"""
from typing import List, TypeVar

from google.cloud import ndb
from app.commons.models import BaseNdbModel,ErrorType
from enum import IntEnum
from google.cloud.ndb import msgprop



client = ndb.Client()


class UserStatus(IntEnum):
    ACTIVATED = 0
    DISABLED = 1
    DELETED = 2
    EMAIL_VALIDATION_REQUIRED = 3


"""class HTTPError(BaseModel):
    " ""
    HTTP error schema to be used when an `HTTPException` is thrown.
    " ""

    detail: str
    status_code: int
    
    class Config:
      orm_mode = True"""


class ExternalUser(ndb.Model):
    name = ndb.StringProperty()
    insertion_date = ndb.DateProperty(auto_now_add=True)
    update_date = ndb.DateProperty(auto_now=True)


# Cuando accede a un endpoint validar el id del bzz enviado, si pertenece o es deuño acceder, en caso contrario es un error,
#


class BranchUser(ndb.Model):
    id = ndb.IntegerProperty()
    first_name = ndb.StringProperty()
    last_name = ndb.StringProperty()
    enabled = ndb.StringProperty()
    # roles = ndb.StringProperty(repeated=True)#array
    roles = ndb.KeyProperty(repeated=True)

T = TypeVar("T", bound="User")

class User(BaseNdbModel):
    # id = ndb.IntegerProperty()

    # User information
    first_name = ndb.StringProperty()
    last_name = ndb.StringProperty()
    email = ndb.StringProperty()
    password = ndb.StringProperty(required=True)

    # Flags and timestamps
    insertion_date = ndb.DateTimeProperty(auto_now_add=True)
    update_date = ndb.DateTimeProperty(auto_now=True)

    status = ndb.IntegerProperty(
        required=True,
        choices=list(UserStatus),
        default=UserStatus.EMAIL_VALIDATION_REQUIRED,
    )
    roles = ndb.KeyProperty(repeated=True)  # kind=BranchRole
    created_by = ndb.KeyProperty()
    updated_by = ndb.KeyProperty()

    # Additional methods for user management can be added here
    @property
    def id(self):
        return self.key.urlsafe()

    @property
    def disabled(self):
        return self.status == UserStatus.DISABLED
        # return self.status == UserStatus.EMAIL_VALIDATION_REQUIRED
        
    @classmethod
    def can_create_entity(cls:T,current_user,**kwargs)->bool:
        from app.auth.utils import CurrentUser
        current_user:CurrentUser = current_user
        if not kwargs.get('email',None):
            return ErrorType.NO_ERROR
        
        with client.context():
            user = cls.query().filter(cls.email==kwargs.get('email')).get()
            if user:
                raise  ErrorType.DUPLICATED
            else:
                return ErrorType.NO_ERROR
            
    @classmethod
    def validate_before_update(cls:T,current_user,user_id:str,**kwargs)->bool:
        with client.context():
            current_entity = cls.get_by_urlsafe(key=user_id)
            if not current_entity:
                return (404,ErrorType.NOT_FOUND)
            if current_user.id != current_entity.created_by.id():
                return (401,ErrorType.NOT_THE_OWNER)
            
            email = kwargs.get('email',None)
            if not email:
                return ErrorType.NO_ERROR
            entity_with_that_email:T = cls.query().filter(cls.email==email).get()
            if not entity_with_that_email:
                return ErrorType.NO_ERROR
            if current_entity.key.id() != entity_with_that_email.key.id():
                return (400,ErrorType.DUPLICATED)
            
            return ErrorType.NO_ERROR

