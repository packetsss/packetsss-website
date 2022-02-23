from django.contrib.auth import get_user_model
from rest_framework import serializers
from friendship.models import Friend, FriendshipRequest

from user.serializers import CustomUserSerializer


class FriendSerializer(serializers.ModelSerializer):
    created = serializers.SerializerMethodField()

    def get_created(self, instance):
        return str(Friend.objects.filter(to_user=instance)[0].created)

    class Meta:
        model = get_user_model()
        fields = ["created"] + list(CustomUserSerializer().get_fields().keys())


class FriendshipRequestSerializer(serializers.ModelSerializer):
    to_user = serializers.CharField()
    from_user = serializers.StringRelatedField()

    class Meta:
        model = FriendshipRequest
        fields = (
            "id",
            "from_user",
            "to_user",
            "message",
            "created",
            "rejected",
            "viewed",
        )
        extra_kwargs = {
            "from_user": {"read_only": True},
            "created": {"read_only": True},
            "rejected": {"read_only": True},
            "viewed": {"read_only": True},
        }


class FriendshipRequestResponseSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()

    class Meta:
        model = FriendshipRequest
        fields = ("id",)
