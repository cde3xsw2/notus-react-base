"""
Tests for API handlers

"""

import pytest
from fastapi.testclient import TestClient
from requests import Response

from app.main import application

# from app.users import
from google.cloud import ndb
from app.users.models import User
from app.auth.endpoints import get_password_hash
from unittest.mock import patch  # Assuming you use unittest.mock for patching
from app.permissions.models import (
    BranchRole,
    EntityPermission,
    PERM_CRUDL,
    PERM_CRUDL_ANOTHER,
    PERM_TO_CREATE_ENTITY,
    PERM_TO_UPDATE_ENTITY,
    PERM_TO_DELETE_ENTITY,
)
import unittest
from faker import Faker

fake = Faker()


clnt = ndb.Client()


_VALID_USER_FIELDS = [
    "first_name",
    "last_name",
    "email",
    "id",
]
_VALID_LOGIN_FIELDS = ["access_token", "token_type"]


# https://docs.python.org/3/library/unittest.html
class TestBase(unittest.TestCase):
    @classmethod
    def setUpClass(
        cls,
    ):
        cls.client = TestClient(application)
        cls.another_first_name = "Basic"
        cls.another_last_name = "User"
        cls.second_user = "basic.user@lozla.com"
        cls.basic_role = BranchRole.create_entity(name="Basic")
        cls.basic_role_perm = EntityPermission.create_entity(
            entity_name="User", role=cls.basic_role.key, permissions=PERM_CRUDL
        )
        cls.admin_role = BranchRole.create_entity(name="Admin")
        cls.admin_role_perm = EntityPermission.create_entity(
            entity_name="User",
            role=cls.admin_role.key,
            permissions=PERM_CRUDL_ANOTHER,
        )

        password_hash = get_password_hash("secret")
        user = User.create_entity(
            first_name="Lazlo",
            last_name="Lozla",
            email="lazlo@lozla.com",
            password=password_hash,
            roles=[cls.basic_role.key, cls.admin_role.key],
        )
        User.create_entity(
            first_name=cls.another_first_name,
            last_name=cls.another_last_name,
            email=cls.second_user,
            password=password_hash,
            roles=[cls.basic_role.key],
        )

    @classmethod
    def tearDownClass(cls):
        with clnt.context():
            ndb.delete_multi(User.query().fetch(keys_only=True))

    def _req(cls, method, *kargs, **kwargs) -> Response:
        headers = kwargs.get("headers") or {}
        headers.update(cls.login_headers)
        if kwargs.get("headers") is not None:
            del kwargs["headers"]
        return method(*kargs, **kwargs, headers=headers)

    def post(cls, *kargs, **kwargs) -> Response:
        return cls._req(cls.client.post, *kargs, **kwargs)

    def get(cls, *kargs, **kwargs) -> Response:
        return cls._req(cls.client.get, *kargs, **kwargs)

    def put(cls, *kargs, **kwargs) -> Response:
        return cls._req(cls.client.put, *kargs, **kwargs)

    def delete(cls, *kargs, **kwargs) -> Response:
        return cls._req(cls.client.delete, *kargs, **kwargs)

    @classmethod
    def login(cls, email="lazlo@lozla.com"):
        headers = {"Content-Type": "application/x-www-form-urlencoded"}
        data = {"username": email, "password": "secret"}
        response: Response = cls.client.post("/token", data=data, headers=headers)
        assert response.status_code == 200
        json_response = response.json()
        access_token = json_response.get("access_token")
        cls.login_headers = {"Authorization": f"Bearer {access_token}"}

    @classmethod
    def get_new_user_data(cls):
        return {
            "first_name": fake.name(),
            "last_name": fake.last_name(),
            "email": fake.email(),
            "password": get_password_hash("random-password"),
        }


class TestUserApi(TestBase):

    def test_create_user_success(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        new_user_data = self.get_new_user_data()
        response: Response = self.post("/users/", json=new_user_data)
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get("first_name") == new_user_data.get("first_name")
        assert json_response.get("last_name") == new_user_data.get("last_name")
        assert json_response.get("email") == new_user_data.get("email")
        assert json_response.get("id") is not None
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS

    def test_get_user(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        new_user_data = self.get_new_user_data()
        response: Response = self.post(
            "/users/", json=new_user_data, headers=self.login_headers
        )
        assert response.status_code == 200
        response: Response = self.get(f'/users/{response.json().get("id")}')
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get("first_name") == new_user_data.get("first_name")
        assert json_response.get("last_name") == new_user_data.get("last_name")
        assert json_response.get("email") == new_user_data.get("email")
        assert json_response.get("id") is not None
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS

    def test_update_user(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/", json=self.get_new_user_data(), headers=self.login_headers
        )
        json_response = response.json()
        id = json_response.get("id")
        json_response["id"] = "invalid-id"
        json_response["status"] = "invalid-status"
        new_user_data = self.get_new_user_data()
        response: Response = self.put(f"/users/{id}", json=new_user_data)
        assert response.status_code == 200
        json_response = response.json()
        assert json_response.get("first_name") == new_user_data.get("first_name")
        assert json_response.get("last_name") == new_user_data.get("last_name")
        assert json_response.get("email") == new_user_data.get("email")
        assert json_response.get("id") == id
        for key in json_response.keys():
            assert key in _VALID_USER_FIELDS

    def test_delete_user(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/", json=self.get_new_user_data(), headers=self.login_headers
        )
        assert response.status_code == 200
        json_response = response.json()
        id = json_response.get("id")
        response: Response = self.delete(f"/users/{id}", headers=self.login_headers)
        assert response.status_code == 200
        response: Response = self.get(f"/users/{id}", headers=self.login_headers)
        assert response.status_code == 404

    def test_get_user_not_found(
        self,
    ):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.get(f"/users/user-doesnt-exist")
        assert response.status_code == 404

    def test_create_user_with_create_permission(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/", json=self.get_new_user_data(), headers=self.login_headers
        )
        assert response.status_code == 200

    def test_create_user_without_create_permission(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL & ~PERM_TO_CREATE_ENTITY
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/", json=self.get_new_user_data(), headers=self.login_headers
        )
        assert response.status_code == 401

    def test_update_user_without_update_permission(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL & ~PERM_TO_UPDATE_ENTITY
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/",
            json=self.get_new_user_data(),
        )
        assert response.status_code == 200
        json_response = response.json()
        id = json_response.get("id")
        json_response["status"] = "invalid-status"
        response: Response = self.put(f"/users/{id}", json=self.get_new_user_data())
        assert response.status_code == 401

    def test_delete_user_without_delete_permission(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL & ~PERM_TO_DELETE_ENTITY
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/", json=self.get_new_user_data(), headers=self.login_headers
        )
        json_response = response.json()
        id = json_response.get("id")
        response: Response = self.delete(f"/users/{id}", headers=self.login_headers)
        assert response.status_code == 401

    def test_update_user_with_a_different_user(self):
        self.login()
        self.basic_role_perm.permissions = PERM_CRUDL
        with clnt.context():
            self.basic_role_perm.put()
        response: Response = self.post(
            "/users/", json=self.get_new_user_data(), headers=self.login_headers
        )
        assert response.status_code == 200
        json_response = response.json()
        id = json_response.get("id")
        json_response["status"] = "invalid-status"
        self.login(email=self.second_user)
        response: Response = self.put(f"/users/{id}", json=self.get_new_user_data())
        assert response.status_code == 401
        with clnt.context():
            modified_user: User = User.get_by_urlsafe(key=id)
        assert modified_user.email == json_response.get("email")
