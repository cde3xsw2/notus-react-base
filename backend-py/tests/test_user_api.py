"""
Tests for API handlers

"""
import pytest
from fastapi.testclient import TestClient
from requests import Response

from app.main import application
#from app.users import 
from google.cloud import ndb
'''
from fastapi.testclient import TestClient
from your_app import app  # Replace with your app's import path

'''

clnt = ndb.Client()

@pytest.fixture(scope='module', autouse=True)
def client():
    return TestClient(application)

first_name = "Losla"
last_name = "Laslo"
email = "laslo.losla@chacarron.com"
enabled = True
data = {"first_name": first_name, "last_name": last_name,"email":email,"enabled":enabled}

_VALID_USER_FIELDS = ['first_name','last_name','email','id',]
_VALID_LOGIN_FIELDS = ['access_token','token_type']

def test_create_user_success(client):
    
    response: Response = client.post('/users/',json=data)
    assert response.status_code == 200
    json_response = response.json()
    assert json_response.get('first_name') == first_name
    assert json_response.get('last_name') == last_name
    assert json_response.get('email') == email
    assert json_response.get('id') is not None
    for key in json_response.keys():
        assert key in _VALID_USER_FIELDS
    
    
def test_get_user(client):
    response: Response = client.post('/users/',json=data)
    response: Response = client.get(f'/users/{response.json().get("id")}')
    json_response = response.json()
    assert json_response.get('first_name') == first_name
    assert json_response.get('last_name') == last_name
    assert json_response.get('email') == email
    assert json_response.get('id') is not None
    for key in json_response.keys():
        assert key in _VALID_USER_FIELDS
        
def test_login(client):
    from app.users.models import User 
    from app.auth.endpoints import get_password_hash
    user = User.create(first_name='Lazlo',last_name='Lozla',email='lazlo@lozla.com',password=get_password_hash('secret'))
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
        assert key in _VALID_USER_FIELDS
    
    assert False
    