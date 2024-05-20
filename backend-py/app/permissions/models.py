"""
Primary API route endpoints
"""
from typing import List

from google.cloud import ndb
from app.commons.models import BaseNdbModel
from app.users.models import BranchUser
from enum import IntEnum

client = ndb.Client()
    

'''
class Branch(ndb.Model):
    id = ndb.IntegerProperty()
    name = ndb.StringProperty()
    description = ndb.StringProperty()    
    
class BranchGroup(ndb.Model):
    id = ndb.IntegerProperty()
    name = ndb.StringProperty()
    description = ndb.StringProperty()
    
    
'''
        

# 9(listio) 8(cio) 7(rio) 6(uio) 5(dio) , if current_user == e.user_id 4(list) 
#           5(print) 4(list)
# 3(c) 2(r) 1(u) 0(d) 
#OWN PERMISSIONS


'''GET /api/users/ if permissions == (PERMISSION_TO_LIST_ENTITIES||PERMISSION_TO_LIST_OTHER_USERS_ENTITIES)
    if not PERMISSION_TO_LIST_OTHER_USERS_ENTITIES => add my user'''

'''GET /api/users/<ID> if permissions == (PERMISSION_TO_READ_ENTITY||PERMISSION_TO_READ_ANOTHER_USER_S_ENTITY)
    if entity.owner == online.id: return True
    if entity.owner != online.id and PERMISSION_TO_READ_ANOTHER_USER_S_ENTITY and entity.is_public: return True'''
    
'''POST /api/users/ if permissions == (PERMISSION_TO_CREATE_ENTITY || PERMISSION_TO_CREATE_ENTITY_ON_BEHALF_OF_ANOTHER_USER)
    if online.id and PERMISSION_TO_CREATE_ENTITY: return True
        entity.created_by = entity.owner = online.id
    if online.id and PERMISSION_TO_CREATE_ENTITY: 
        entity.created_by = online.id
        entity.owner = param_user.user_id'''

'''PUT /api/users/<ID> if permissions == (PERMISSION_TO_UPDATE_ENTITY|| PERMISSION_TO_UPDATE_ANOTHER_USER_S_ENTITY):
    if online.id and entity.owner == online.id and PERMISSION_TO_UPDATE_ENTITY:
        entity.updated_by = online.id
    if online.id and PERMISSION_TO_UPDATE_ENTITY:
        entity.updated_by = online.id'''
        
'''DELETE /api/users/<ID> if permissions == (PERMISSION_TO_DELETE_ENTITY|| PERMISSION_TO_DELETE_ANOTHER_USER_S_ENTITY):
    if online.id and entity.owner == online.id and PERMISSION_TO_UPDATE_ENTITY:
        entity.deleted_by = online.id
    if online.id and PERMISSION_TO_UPDATE_ENTITY:
        entity.updated_by = online.id'''




'''
Users = for normal users: READ+UPDATE(your own user)
Admin = for admin user: CREATE+READ+UPDATE+DELETE(your own and other users)
Users = for editor user: READ(your own user+other users)
ContentModerator = CREATE+READ+UPDATE+DELETE()
ContentCreator = 
Desarrollador = 
'''
PERMISSION_TO_CREATE_ENTITY = 1 << 0
PERMISSION_TO_READ_ENTITY = 1 << 1
PERMISSION_TO_UPDATE_ENTITY = 1 << 2
PERMISSION_TO_DELETE_ENTITY = 1 << 3
PERMISSION_TO_LIST_ENTITIES = 1 << 4

PERMISSION_TO_CREATE_ENTITY_ON_BEHALF_OF_ANOTHER_USER = PERMISSION_TO_CREATE_ENTITY << 10
PERMISSION_TO_READ_ANOTHER_USER_S_ENTITY = PERMISSION_TO_READ_ENTITY << 10
PERMISSION_TO_UPDATE_ANOTHER_USER_S_ENTITY = PERMISSION_TO_UPDATE_ENTITY << 10
PERMISSION_TO_DELETE_ANOTHER_USER_S_ENTITY = PERMISSION_TO_DELETE_ENTITY << 10
PERMISSION_TO_LIST_OTHER_USERS_ENTITIES = PERMISSION_TO_LIST_ENTITIES << 10

PERMISSION_CRUDL = PERMISSION_TO_CREATE_ENTITY | PERMISSION_TO_READ_ENTITY | PERMISSION_TO_UPDATE_ENTITY| PERMISSION_TO_DELETE_ENTITY | PERMISSION_TO_LIST_ENTITIES
PERMISSION_CRUDL_ANOTHER = PERMISSION_TO_CREATE_ENTITY_ON_BEHALF_OF_ANOTHER_USER | PERMISSION_TO_READ_ANOTHER_USER_S_ENTITY | PERMISSION_TO_UPDATE_ANOTHER_USER_S_ENTITY | PERMISSION_TO_DELETE_ANOTHER_USER_S_ENTITY | PERMISSION_TO_LIST_OTHER_USERS_ENTITIES


'''class EntityName(IntEnum):
  ACTIVATED = 0
  DISABLED = 1
  DELETED = 2
  EMAIL_VALIDATION_REQUIRED = 3'''

class BranchRole(BaseNdbModel):
    name = ndb.StringProperty()
  
class EntityPermission(BaseNdbModel):
  #entity_name = ndb.IntegerProperty(required = True, choices=list(EntityName))
  entity_name = ndb.StringProperty(required=True)
  role = ndb.KeyProperty()
  #branch_permission = ndb.IntegerProperty()#An ndb.IntegerProperty in NDB stores 8 bytes.
  permissions = ndb.IntegerProperty()#indexed=False
  
  
  #def find_by_roles(cls,roles)->List[EntityPermission]:
  @classmethod
  def find_by_roles(cls,roles)->List:
      query = EntityPermission.query()
      if roles:
          r = query.filter(EntityPermission.role.IN(roles)).get()
          if isinstance(r,EntityPermission):
              return [r]
          else:
              return r
      else:
          return []
      
  
#TablePermission(role=BranchRole.ADMIN, CREATE_PERMISSION && READ_PERMISSION)
  
  


  
'''
class Permissions(ndb.Model):
    bzz_permission_1 = ndb.StringProperty()
    
    gp_permission_1 = ndb.BooleanProperty()
    gp_permission_2 = ndb.StringProperty()
    
    
    gp_table_permission = ndb.IntegerProperty()#8 bytes
    
    
class UserPermissions(ndb.Model):
    bzzUser: BranchUser
    permissions: Permissions
    
class Configuration(ndb.Model):
    terms_and_conditions = ndb.StringProperty()
    bzz_name = ndb.StringProperty()
    img_logo = ndb.TextProperty()
    default_lang = ndb.TextProperty()
    time_zone = ndb.TextProperty()
    default_currency = ndb.TextProperty()
    allowed_currencies = ndb.StringProperty()
    
class ExternalUser(ndb.Model):
    name= ndb.StringProperty()
    insertion_date = ndb.DateProperty(auto_now_add=True)
    update_date = ndb.DateProperty(auto_now=True)'''
    
    
    
    
###NO
'''
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
  
  
'''