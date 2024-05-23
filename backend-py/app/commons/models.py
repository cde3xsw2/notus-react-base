from google.cloud import ndb
from enum import Enum
import logging

client = ndb.Client()


class ErrorType(Enum):
    DUPLICATED = "Entidad duplicada"
    NO_ERROR = None
    NOT_THE_OWNER = "No es el propietario"
    NOT_FOUND = "Entidad no encontrada"


class BaseNdbModel(ndb.Model):

    @classmethod
    def ids_to_keys(cls, ids):
        with client.context():
            return [ndb.Key(cls, id) for id in ids]

    @classmethod
    def get_by_urlsafe(cls, key):
        try:
            e = ndb.Key(urlsafe=key).get()
            if not isinstance(e, cls):
                raise Exception("")
            return e
        except Exception as err:
            logging.error(f"get_by_urlsafe {err}")
            return

    @classmethod
    def create_entity(cls, **kwargs):
        with client.context():
            e = cls(**kwargs)
            e.put()
            return e

    @classmethod
    def update_entity(cls, key, data, *kargs, **kwargs):
        try:
            e = cls.get_by_urlsafe(key)
            if not e:
                return
        except Exception as e:
            logging.error(f"update_entity {e}")

            return
        for name, val in data.dict().items():
            setattr(e, name, val)
        e.put()
        return e

    @classmethod
    def delete_entity(cls, key):
        try:
            e: ndb.Model = cls.get_by_urlsafe(key)
            if e:
                e.key.delete()
                return True
        except Exception as e:
            logging.error(f"delete_entity {e}")
            return


class DbException(Exception): ...
