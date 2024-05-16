from google.cloud import ndb


class BaseNdbModel(ndb.Model):
  
  @classmethod
  def get_by_key(cls,key):
    return cls.query(cls.key == ndb.Key(urlsafe=key)).get()