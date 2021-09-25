""" 
A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing. Generally, each model maps to a single database table.
"""

from django.db import models


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField(auto_now_add=True,)
    owner_id = models.PositiveIntegerField() # id of owner (user)
    owner_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
