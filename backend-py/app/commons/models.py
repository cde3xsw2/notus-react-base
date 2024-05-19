from google.cloud import ndb

client = ndb.Client()

class BaseNdbModel(ndb.Model):
  
  @classmethod
  def get_by_key(cls,key):
    return cls.query(cls.key == ndb.Key(urlsafe=key)).get()
  
  @classmethod
  def create(cls,*kargs,**kwargs):
    with client.context():
      e = cls(**kwargs)
      e.put()
      return e