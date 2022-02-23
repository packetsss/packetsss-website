from user.models import CustomUser
from rest_framework import serializers


class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    # password = serializers.CharField(min_length=8, write_only=True, required=False)

    avatar = serializers.ImageField(required=False)

    class Meta:
        model = CustomUser
        fields = ["id", "email", "username", "avatar"]  # "password"
        # extra_kwargs = {"password": {"write_only": True}}  # for security

    # register new user
    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    def list(self, *args, **kwargs):
        print(args, kwargs)

    def update(self, instance, validated_data):
        password = validated_data.pop("password", None)
        avatar = validated_data.pop("avatar", None)
        if password is not None:
            instance.set_password(password)
        if avatar is not None:
            instance.avatar = avatar
        instance.save()
        return instance
