from google.cloud import ndb

client = ndb.Client()


class BaseNdbModel(ndb.Model):

    @classmethod
    def ids_to_keys(cls, ids):
        with client.context():
            return [ndb.Key(cls, id) for id in ids]

    @classmethod
    def get_by_urlsafe(cls, key):
        with client.context():
            try:
                e = ndb.Key(urlsafe=key).get()
                if not isinstance(e, cls):
                    raise Exception("")
                return e
            except Exception as err:
                return

    @classmethod
    def create_entity(cls, *kargs, **kwargs):
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
        except Exception:
            return
        for name, val in data.dict().items():
            setattr(e, name, val)
        with client.context():
            e.put()
        return e

    @classmethod
    def delete_entity(cls, key):
        try:
            e: ndb.Model = cls.get_by_urlsafe(key)
            if e:
                with client.context():
                    e.key.delete()
                    return True
        except Exception:
            return
