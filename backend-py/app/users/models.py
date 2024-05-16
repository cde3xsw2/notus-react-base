"""
Primary API route endpoints

"""
from google.cloud import ndb
from app.commons.models import BaseNdbModel


client = ndb.Client()

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



class User(BaseNdbModel):
  #id = ndb.IntegerProperty()
  
  # User information
  first_name = ndb.StringProperty()
  last_name = ndb.StringProperty()
  email = ndb.StringProperty()
  
  # Flags and timestamps
  enabled = ndb.BooleanProperty(default=True)
  insertion_date = ndb.DateTimeProperty(auto_now_add=True)
  update_date = ndb.DateTimeProperty(auto_now=True)
  

  # Additional methods for user management can be added here
  @property
  def id(self):
    return self.key.urlsafe()
  
  #@staticmethod
  
  
