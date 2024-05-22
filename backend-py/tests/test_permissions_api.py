"""
Tests for API handlers

"""

import pytest
from fastapi.testclient import TestClient
from requests import Response

from app.main import application

# from app.users import

"""
from fastapi.testclient import TestClient
from your_app import app  # Replace with your app's import path

"""


@pytest.fixture(scope="module", autouse=True)
def client():
    return TestClient(application)


first_name = "Lazlo"
last_name = "Lozla"
email = "laslo.losla@chacarron.com"
enabled = True
data = {
    "first_name": first_name,
    "last_name": last_name,
    "email": email,
    "enabled": enabled,
}

"""def test_create_user_success(client):
    response: Response = client.post('/users/',json=data)
    assert response.status_code == 200
    json_response = response.json()
    assert json_response.get('first_name') == first_name
    assert json_response.get('last_name') == last_name
    assert json_response.get('email') == email
    assert json_response.get('id') is not None
    assert json_response.get('insertion_date') is not None
    assert json_response.get('update_date') is not None
    
def test_get_user(client):
    response: Response = client.post('/users/',json=data)
    response: Response = client.get(f'/users/{response.json().get("id")}')
    json_response = response.json()
    assert json_response.get('first_name') == first_name
    assert json_response.get('last_name') == last_name
    assert json_response.get('email') == email
    assert json_response.get('id') is not None
    assert json_response.get('insertion_date') is not None
    assert json_response.get('update_date') is not None
    assert True == False"""
