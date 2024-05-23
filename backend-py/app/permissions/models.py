"""
Primary API route endpoints
"""

from typing import List, TypeVar

from google.cloud import ndb
from app.commons.models import BaseNdbModel
from app.users.models import BranchUser
from enum import IntEnum

client = ndb.Client()


"""
class Branch(ndb.Model):
    id = ndb.IntegerProperty()
    name = ndb.StringProperty()
    description = ndb.StringProperty()    
    
class BranchGroup(ndb.Model):
    id = ndb.IntegerProperty()
    name = ndb.StringProperty()
    description = ndb.StringProperty()
    
    
"""


# 9(listio) 8(cio) 7(rio) 6(uio) 5(dio) , if current_user == e.user_id 4(list)
#           5(print) 4(list)
# 3(c) 2(r) 1(u) 0(d)
# OWN PERMISSIONS


"""GET /api/users/ if permissions == (PERM_TO_LIST_ENTITIES||PERM_TO_LIST_OTHER_USERS_ENTITIES)
    if not PERM_TO_LIST_OTHER_USERS_ENTITIES => add my user"""

"""GET /api/users/<ID> if permissions == (PERM_TO_READ_ENTITY||PERM_TO_READ_ANOTHER_USER_S_ENTITY)
    if entity.owner == online.id: return True
    if entity.owner != online.id and PERM_TO_READ_ANOTHER_USER_S_ENTITY and entity.is_public: return True"""

"""POST /api/users/ if permissions == (PERM_TO_CREATE_ENTITY || PERM_TO_LIST_ENTITIES)
    if online.id and PERM_TO_CREATE_ENTITY: return True
        entity.created_by = entity.owner = online.id
    if online.id and PERM_TO_CREATE_ENTITY: 
        entity.created_by = online.id
        entity.owner = param_user.user_id"""

"""PUT /api/users/<ID> if permissions == (PERM_TO_UPDATE_ENTITY|| PERM_TO_UPDATE_ANOTHER_USER_S_ENTITY):
    if online.id and entity.owner == online.id and PERM_TO_UPDATE_ENTITY:
        entity.updated_by = online.id
    if online.id and PERM_TO_UPDATE_ENTITY:
        entity.updated_by = online.id"""

"""DELETE /api/users/<ID> if permissions == (PERM_TO_DELETE_ENTITY|| PERM_TO_DELETE_ANOTHER_USER_S_ENTITY):
    if online.id and entity.owner == online.id and PERM_TO_UPDATE_ENTITY:
        entity.deleted_by = online.id
    if online.id and PERM_TO_UPDATE_ENTITY:
        entity.updated_by = online.id"""


"""
Users = for normal users: READ+UPDATE(your own user)
Admin = for admin user: CREATE+READ+UPDATE+DELETE(your own and other users)
Users = for editor user: READ(your own user+other users)
ContentModerator = CREATE+READ+UPDATE+DELETE()
ContentCreator = 
Desarrollador = 
"""
PERM_TO_CREATE_ENTITY = 1 << 0
PERM_TO_READ_ENTITY = 1 << 1
PERM_TO_UPDATE_ENTITY = 1 << 2
PERM_TO_DELETE_ENTITY = 1 << 3
PERM_TO_LIST_ENTITIES = 1 << 4

PERM_TO_CREATE_ENTITY_ON_BEHALF_OF_ANOTHER_USER = PERM_TO_CREATE_ENTITY << 10
PERM_TO_READ_ANOTHER_USER_S_ENTITY = PERM_TO_READ_ENTITY << 10
PERM_TO_UPDATE_ANOTHER_USER_S_ENTITY = PERM_TO_UPDATE_ENTITY << 10
PERM_TO_DELETE_ANOTHER_USER_S_ENTITY = PERM_TO_DELETE_ENTITY << 10
PERM_TO_LIST_OTHER_USERS_ENTITIES = PERM_TO_LIST_ENTITIES << 10

PERM_CRUDL = (
    PERM_TO_CREATE_ENTITY
    | PERM_TO_READ_ENTITY
    | PERM_TO_UPDATE_ENTITY
    | PERM_TO_DELETE_ENTITY
    | PERM_TO_LIST_ENTITIES
)
PERM_CRUDL_ANOTHER = (
    PERM_TO_CREATE_ENTITY_ON_BEHALF_OF_ANOTHER_USER
    | PERM_TO_READ_ANOTHER_USER_S_ENTITY
    | PERM_TO_UPDATE_ANOTHER_USER_S_ENTITY
    | PERM_TO_DELETE_ANOTHER_USER_S_ENTITY
    | PERM_TO_LIST_OTHER_USERS_ENTITIES
)


"""class EntityName(IntEnum):
  ACTIVATED = 0
  DISABLED = 1
  DELETED = 2
  EMAIL_VALIDATION_REQUIRED = 3"""


class BranchRole(BaseNdbModel):
    name = ndb.StringProperty()


T = TypeVar("T", bound="EntityPermission")


class EntityPermission(BaseNdbModel):
    # entity_name = ndb.IntegerProperty(required = True, choices=list(EntityName))
    entity_name = ndb.StringProperty(required=True)
    role = ndb.KeyProperty()
    # branch_permission = ndb.IntegerProperty()#An ndb.IntegerProperty in NDB stores 8 bytes.
    permissions = ndb.IntegerProperty()  # indexed=False

    # def __init__(self, value: T):
    #  self.value = value

    # def find_by_roles(cls,roles)->List[EntityPermission]:
    @classmethod
    def find_by_roles(cls, entity_name: str, roles: List[dict]) -> List[T]:
        query = EntityPermission.query()
        if roles and entity_name:
            query = query.filter(EntityPermission.entity_name == entity_name)
            r = query.filter(EntityPermission.role.IN(roles)).get()
            if not r:
                return []
            if isinstance(r, EntityPermission):
                return [r]
            else:
                return r
        else:
            return []

    @classmethod
    def has_permissions(cls, entitiesPermissions: List[T], required_perm):
        for ent in entitiesPermissions:
            if ent.permissions & required_perm:
                return True
        return False

    @classmethod
    def _can_create(cls, entitiesPermissions: List[T]):
        return cls.has_permissions(entitiesPermissions, PERM_TO_CREATE_ENTITY)

    @classmethod
    def _can_read(cls, entitiesPermissions: List[T]):
        return cls.has_permissions(entitiesPermissions, PERM_TO_READ_ENTITY)

    @classmethod
    def _can_update(cls, entitiesPermissions: List[T]):
        return cls.has_permissions(entitiesPermissions, PERM_TO_UPDATE_ENTITY)

    @classmethod
    def _can_delete(cls, entitiesPermissions: List[T]):
        return cls.has_permissions(entitiesPermissions, PERM_TO_DELETE_ENTITY)

    @classmethod
    def _can_create_others(cls, entitiesPermissions: List[T]):
        return cls.has_permissions(entitiesPermissions, PERM_TO_LIST_ENTITIES)

    @classmethod
    def can_create(cls, entity: str, with_roles: List) -> bool:
        with client.context():
            perms = cls.find_by_roles(entity_name=entity, roles=with_roles)
            return cls._can_create(perms)

    @classmethod
    def can_read(cls, entity: str, with_roles: List) -> bool:
        with client.context():
            perms = cls.find_by_roles(entity_name=entity, roles=with_roles)
            return cls._can_read(perms)

    @classmethod
    def can_update(cls, entity: str, with_roles: List) -> bool:
        with client.context():
            perms = cls.find_by_roles(entity_name=entity, roles=with_roles)
            return cls._can_update(perms)

    @classmethod
    def can_delete(cls, entity: str, with_roles: List) -> bool:
        with client.context():
            perms = cls.find_by_roles(entity_name=entity, roles=with_roles)
            return cls._can_delete(perms)


"""
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
    update_date = ndb.DateProperty(auto_now=True)"""


###NO
"""
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
  
  
"""
