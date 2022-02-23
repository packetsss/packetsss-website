"""
Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.
"""

from django.conf import settings
from rest_framework import serializers

from .models import Post

# ModelSerializer auto serializes (better than Serializer)
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "content", "date", "slug", "author", "author_name"]
