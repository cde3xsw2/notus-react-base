"""
Tests for API handlers

"""
import pytest
from fastapi.testclient import TestClient
from requests import Response

from app.main import application
#from app.users import 
from google.cloud import ndb
from app.users.models import User 
from app.auth.endpoints import get_password_hash
from unittest.mock import patch  # Assuming you use unittest.mock for patching
from app.permissions.models import BranchRole, EntityPermission,PERM_CRUDL,PERM_CRUDL_ANOTHER
'''
from fastapi.testclient import TestClient
from your_app import app  # Replace with your app's import path

'''

'''@pytest.fixture(scope='module', autouse=True)
def client():
'''
clnt = ndb.Client()


_VALID_USER_FIELDS = ['first_name','last_name','email','id',]
_VALID_LOGIN_FIELDS = ['access_token','token_type']

class TestBase:
    def _req(self,method,*kargs,**kwargs)->Response:
        headers=kwargs.get('headers') or {}
        headers.update(self.login_headers)
        if kwargs.get('headers') is not None:
            del kwargs['headers']
        return method(*kargs,**kwargs,headers=headers)
    
    def post(self,*kargs,**kwargs)->Response:
        return self._req(self.client.post,*kargs,**kwargs)
    
    def get(self,*kargs,**kwargs)->Response:
        return self._req(self.client.get,*kargs,**kwargs)
    
    def put(self,*kargs,**kwargs)->Response:
        return self._req(self.client.put,*kargs,**kwargs)
    
    def delete(self,*kargs,**kwargs)->Response:
        return self._req(self.client.delete,*kargs,**kwargs)
    
    @classmethod
    def login(cls,email='lazlo@lozla.com'):
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        data = {'username': email,'password':'secret'}
        response: Response = cls.client.post('/token',data=data,headers=headers)
        json_response = response.json()
        access_token = json_response.get('access_token')
        cls.login_headers = {'Authorization':f'Bearer {access_token}'}

class TestUserApi(TestBase):
        
    @classmethod
    def setup_class(cls,):
        cls.client = TestClient(application)
        cls.first_name = "Lazlo"
        cls.last_name = "Lozla"
        cls.email = "laslo.losla@chacarron.com"
        enabled = True
        cls.data = {"first_name": cls.first_name, "last_name": cls.last_name,"email":cls.email,"enabled":enabled}
        basic_role = BranchRole.create_entity(name='Basic')
        EntityPermission.create_entity(entity_name=User.__name__,role=basic_role.key,permissions=PERM_CRUDL)
        admin_role = BranchRole.create_entity(name='Admin')
        EntityPermission.create_entity(entity_name=User.__name__,role=admin_role.key,permissions=PERM_CRUDL_ANOTHER)
        roles=[basic_role.key,admin_role.key]
        user = User.create_entity(first_name='Lazlo',last_name='Lozla',email='lazlo@lozla.com',password=get_password_hash('secret'),roles=roles)
        
    
    @classmethod
    def teardown_class(cls):
        with clnt.context():
            ndb.delete_multi(User.query().fetch(keys_only=True))


    def test_create_user_success(self):
        self.login()
        response: Response = self.post('/users/',json=self.data)
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get('first_name') == self.first_name
        assert json_response.get('last_name') == self.last_name
        assert json_response.get('email') == self.email
        assert json_response.get('id') is not None
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS
        assert False
        
        
    def test_get_user(self):
        self.login()
        response: Response = self.post('/users/',json=self.data,headers=self.login_headers)
        response: Response = self.get(f'/users/{response.json().get("id")}')
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get('first_name') == self.first_name
        assert json_response.get('last_name') == self.last_name
        assert json_response.get('email') == self.email
        assert json_response.get('id') is not None
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS
            
    def test_update_user(self):
        self.login()
        response: Response = self.post('/users/',json=self.data,headers=self.login_headers)
        json_response = response.json()
        id = json_response.get("id")
        json_response['id']='invalid-id'
        json_response['status']='invalid-status'
        response: Response = self.put(f'/users/{id}',json=self.data)
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get('first_name') == self.first_name
        assert json_response.get('last_name') == self.last_name
        assert json_response.get('email') == self.email
        assert json_response.get('id') == id
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS

    def test_delete_user(self):
        self.login()
        response: Response = self.post('/users/',json=self.data,headers=self.login_headers)
        json_response = response.json()
        id = json_response.get("id")
        response: Response = self.delete(f'/users/{id}',headers=self.login_headers)
        assert response.status_code == 200
        response: Response = self.get(f'/users/{id}',headers=self.login_headers)
        assert response.status_code == 404
        
            
    def test_get_user_not_found(self,):
        self.login()
        response: Response = self.get(f'/users/user-doesnt-exist')
        assert response.status_code == 404
            
    def test_create_user_with_create_permission(self):
        self.login()
        response: Response = self.post('/users/',json=self.data,headers=self.login_headers)
        assert response.status_code == 200
        #json_response = response.json()
        
        
        
    def test_create_user_without_create_permission(self):
        self.login()
        response: Response = self.post('/users/',json=self.data,headers=self.login_headers)
        assert response.status_code == 200
        
        
    def test_update_user_with_update_permission(self):...        
    def test_update_user_without_update_permission(self):...        

    '''PERM_TO_CREATE_ENTITY = 1 << 0
    PERM_TO_READ_ENTITY = 1 << 1
    PERM_TO_UPDATE_ENTITY = 1 << 2
    PERM_TO_DELETE_ENTITY = 1 << 3
    PERM_TO_LIST_ENTITIES = 1 << 4

    PERM_TO_LIST_ENTITIES = PERM_TO_CREATE_ENTITY << 10
    PERM_TO_READ_ANOTHER_USER_S_ENTITY = PERM_TO_READ_ENTITY << 10
    PERM_TO_UPDATE_ANOTHER_USER_S_ENTITY = PERM_TO_UPDATE_ENTITY << 10
    PERM_TO_DELETE_ANOTHER_USER_S_ENTITY = PERM_TO_DELETE_ENTITY << 10
    PERM_TO_LIST_OTHER_USERS_ENTITIES = PERM_TO_LIST_ENTITIES << 10'''
            
            
    '''def test_login(client):
        from app.users.models import User 
        from app.auth.endpoints import get_password_hash
        User.create_entity(first_name='Lazlo',last_name='Lozla',email='lazlo@lozla.com',password=get_password_hash('secret'))
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        data = {'username': 'lazlo@lozla.com','password':'secret'}
        response: Response = client.post('/token',data=data,headers=headers)
        assert response.status_code == 200
        json_response = response.json()
        access_token = json_response.get('access_token')
        assert access_token is not None
        assert json_response.get('token_type') == 'bearer'
        for key in json_response.keys():
            assert key in _VALID_LOGIN_FIELDS

        headers = {'Authorization':f'Bearer {access_token}'}
        response: Response = client.get('/auth/users/me',headers=headers)
        assert response.status_code == 200
        json_response = response.json()
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS'''
        