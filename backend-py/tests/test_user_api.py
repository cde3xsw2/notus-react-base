"""
Tests for API handlers

"""
import pytest
from fastapi.testclient import TestClient
from requests import Response

from app.main import application
#from app.users import 

'''
from fastapi.testclient import TestClient
from your_app import app  # Replace with your app's import path

'''

@pytest.fixture(scope='module', autouse=True)
def client():
    return TestClient(application)

first_name = "Losla"
last_name = "Laslo"
email = "laslo.losla@chacarron.com"
enabled = True
data = {"first_name": first_name, "last_name": last_name,"email":email,"enabled":enabled}

_VALID_USER_FIELDS = ['first_name','last_name','email','id',]

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