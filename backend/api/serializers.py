"""
Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.
"""

from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

from .models import Article

# ModelSerializer auto serializes (better than Serializer)
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ["id", "title", "description"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        
        # disable displaying password using get
        extra_kwargs = {"password": {
            "write_only": True,
            "required": True,
        }}
    
    # encrypt (hash) the password
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user) # auto create a token
        return user
