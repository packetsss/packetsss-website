from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from .models import Post
from .serializers import PostSerializer


class PostUserWritePermission(BasePermission):
    message = "Editing posts is restricted to the author only"

    def has_object_permission(self, request, view, obj):
        # if is not author, only allow get, option, head
        if request.method in SAFE_METHODS:
            return True

        # if is author, allow put and delete
        return obj.author == request.user


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [
        PostUserWritePermission,
    ]  # require token to get from posts