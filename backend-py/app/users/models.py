"""
Primary API route endpoints

"""
from google.cloud import ndb
from app.commons.models import BaseNdbModel
from enum import IntEnum
from google.cloud.ndb import msgprop



client = ndb.Client()

class UserStatus(IntEnum):
  ACTIVATED = 0
  DISABLED = 1
  DELETED = 2
  EMAIL_VALIDATION_REQUIRED = 3

'''class HTTPError(BaseModel):
    " ""
    HTTP error schema to be used when an `HTTPException` is thrown.
    " ""

    detail: str
    status_code: int
    
    class Config:
      orm_mode = True'''

    
class ExternalUser(ndb.Model):
    name= ndb.StringProperty()
    insertion_date = ndb.DateProperty(auto_now_add=True)
    update_date = ndb.DateProperty(auto_now=True)
    
# Cuando accede a un endpoint validar el id del bzz enviado, si pertenece o es deuño acceder, en caso contrario es un error, 
# 

class BranchUser(ndb.Model):
    id = ndb.IntegerProperty()
    first_name = ndb.StringProperty()
    last_name = ndb.StringProperty()
    enabled = ndb.StringProperty()
    #roles = ndb.StringProperty(repeated=True)#array
    roles = ndb.KeyProperty(repeated=True)

class User(BaseNdbModel):
  #id = ndb.IntegerProperty()
  
  # User information
  first_name = ndb.StringProperty()
  last_name = ndb.StringProperty()
  email = ndb.StringProperty()
  password = ndb.StringProperty()
  
  # Flags and timestamps
  insertion_date = ndb.DateTimeProperty(auto_now_add=True)
  update_date = ndb.DateTimeProperty(auto_now=True)
  
  status = ndb.IntegerProperty(required = True, choices=list(UserStatus),default=UserStatus.EMAIL_VALIDATION_REQUIRED)
  roles = ndb.KeyProperty(repeated=True)#kind=BranchRole

  # Additional methods for user management can be added here
  @property
  def id(self):
    return self.key.urlsafe()
  
  @property
  def disabled(self):
    return self.status == UserStatus.DISABLED
    #return self.status == UserStatus.EMAIL_VALIDATION_REQUIRED
  
  
  
