"""
Primary API route endpoints

"""
from google.cloud import ndb
from app.commons.models import BaseNdbModel
from enum import Enum
from google.cloud.ndb import msgprop



client = ndb.Client()


class UserStatus(Enum):
  ACTIVATED = 0
  DISABLED = 1
  DELETED = 3
  EMAIL_VALIDATION_REQUIRED = 4

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
  
  # Flags and timestamps
  enabled = ndb.BooleanProperty(default=True)#####REMOVE
  insertion_date = ndb.DateTimeProperty(auto_now_add=True)
  update_date = ndb.DateTimeProperty(auto_now=True,default=UserStatus.EMAIL_VALIDATION_REQUIRED)
  
  #status = ndb.StringProperty(default)
  #status = msgprop.EnumProperty(UserStatus, required=False)
  

  # Additional methods for user management can be added here
  @property
  def id(self):
    return self.key.urlsafe()
  
  #@staticmethod
  
  
