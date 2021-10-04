"""
Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types. Serializers also provide deserialization, allowing parsed data to be converted back into complex types, after first validating the incoming data.
"""

from django.conf import settings
from rest_framework import serializers
from rest_framework.authtoken.views import Token

from .models import Post

# ModelSerializer auto serializes (better than Serializer)
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "content", "date", "slug", "author", "author_name"]


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = settings.AUTH_USER_MODEL
        fields = ["id", "username", "email", "password"]

        # disable displaying password using get
        extra_kwargs = {
            "password": {
                "write_only": True,
                "required": True,
            }
        }

    # # encrypt (hash) the password
    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     Token.objects.create(user=user) # auto create a token
    #     return user
