""" 
A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing. Generally, each model maps to a single database table.
"""

import random
from django.db import models
from django.conf import settings
from django.utils import timezone
from autoslug import AutoSlugField
from django.template.defaultfilters import truncatechars


def custom_slugify(value: str):
    slug = value.split()
    if len(slug) > 5:
        slug = slug[:5]
    slug.append(str(random.randint(0, 99999)))
    return "_".join(slug)


# Create your models here.
class Post(models.Model):
    class Meta:
        ordering = [("-date")]

    title = models.CharField(max_length=100)
    content = models.TextField(max_length=777)
    date = models.DateTimeField(default=timezone.now)
    slug = AutoSlugField(populate_from="title", unique=True, slugify=custom_slugify)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, rel="post"
    )
    author_name = models.CharField(max_length=100)

    objects = models.Manager()

    def __str__(self):
        return self.title

    @property
    def short_author(self):
        return truncatechars(self.author, 10)

    @property
    def short_date(self):
        return truncatechars(self.date, 11)
    
    @property
    def short_title(self):
        return truncatechars(self.title, 10)

    @property
    def short_content(self):
        return truncatechars(self.content, 10)

    @property
    def short_slug(self):
        return truncatechars(self.slug, 10)
