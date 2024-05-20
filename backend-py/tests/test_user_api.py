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
from app.permissions.models import BranchRole, EntityPermission,PERMISSION_CRUDL
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

class TestUserApi:
        
    @classmethod
    def setup_class(cls,):
        cls.client = TestClient(application)
        cls.first_name = "Lazlo"
        cls.last_name = "Lozla"
        cls.email = "laslo.losla@chacarron.com"
        enabled = True
        cls.data = {"first_name": cls.first_name, "last_name": cls.last_name,"email":cls.email,"enabled":enabled}
        role = BranchRole.create_entity(name='Admin')
        EntityPermission.create_entity(entity_name=User.__name__,role=role.key,permissions=PERMISSION_CRUDL)
        roles=[role.key]
        user = User.create_entity(first_name='Lazlo',last_name='Lozla',email='lazlo@lozla.com',password=get_password_hash('secret'),roles=roles)
        cls.headers = {"Content-Type": "application/x-www-form-urlencoded"}
        data = {'username': 'lazlo@lozla.com','password':'secret'}
        response: Response = cls.client.post('/token',data=data,headers=cls.headers)
        json_response = response.json()
        access_token = json_response.get('access_token')
        cls.login_headers = {'Authorization':f'Bearer {access_token}'}
    
    @classmethod
    def teardown_class(cls):
        with clnt.context():
            ndb.delete_multi(User.query().fetch(keys_only=True)
)


    def test_create_user_success(self):
        response: Response = self.client.post('/users/',json=self.data,headers=self.login_headers)
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
        response: Response = self.client.post('/users/',json=self.data,headers=self.login_headers)
        response: Response = self.client.get(f'/users/{response.json().get("id")}')
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get('first_name') == self.first_name
        assert json_response.get('last_name') == self.last_name
        assert json_response.get('email') == self.email
        assert json_response.get('id') is not None
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS
            
    def test_update_user(self):
        response: Response = self.client.post('/users/',json=self.data,headers=self.login_headers)
        json_response = response.json()
        id = json_response.get("id")
        json_response['id']='invalid-id'
        json_response['status']='invalid-status'
        response: Response = self.client.put(f'/users/{id}',json=self.data)
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get('first_name') == self.first_name
        assert json_response.get('last_name') == self.last_name
        assert json_response.get('email') == self.email
        assert json_response.get('id') == id
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS

    def test_delete_user(self):
        response: Response = self.client.post('/users/',json=self.data,headers=self.login_headers)
        json_response = response.json()
        id = json_response.get("id")
        response: Response = self.client.delete(f'/users/{id}',headers=self.login_headers)
        assert response.status_code == 200
        response: Response = self.client.get(f'/users/{id}',headers=self.login_headers)
        assert response.status_code == 404
        
            
    def test_get_user_not_found(self,):
        response: Response = self.client.get(f'/users/user-doesnt-exist')
        assert response.status_code == 404
            
    def test_create_user_with_create_permission(self):
        response: Response = self.client.post('/users/',json=self.data,headers=self.login_headers)
        assert response.status_code == 200
        
        #json_response = response.json()
        
        
        
    def test_create_user_without_create_permission(self):...        
    def test_update_user_with_update_permission(self):...        
    def test_update_user_without_update_permission(self):...        

    '''PERMISSION_TO_CREATE_ENTITY = 1 << 0
    PERMISSION_TO_READ_ENTITY = 1 << 1
    PERMISSION_TO_UPDATE_ENTITY = 1 << 2
    PERMISSION_TO_DELETE_ENTITY = 1 << 3
    PERMISSION_TO_LIST_ENTITIES = 1 << 4

    PERMISSION_TO_CREATE_ENTITY_ON_BEHALF_OF_ANOTHER_USER = PERMISSION_TO_CREATE_ENTITY << 10
    PERMISSION_TO_READ_ANOTHER_USER_S_ENTITY = PERMISSION_TO_READ_ENTITY << 10
    PERMISSION_TO_UPDATE_ANOTHER_USER_S_ENTITY = PERMISSION_TO_UPDATE_ENTITY << 10
    PERMISSION_TO_DELETE_ANOTHER_USER_S_ENTITY = PERMISSION_TO_DELETE_ENTITY << 10
    PERMISSION_TO_LIST_OTHER_USERS_ENTITIES = PERMISSION_TO_LIST_ENTITIES << 10'''
            
            
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
        