from rest_framework.views import APIView
from rest_framework import status, viewsets

from rest_framework.permissions import BasePermission

from .models import CustomUser
from .serializers import CustomUserSerializer


class CustomUserPermission(BasePermission):
    message = "Register is open for everyone"

    def has_permission(self, request, view):
        # allow create by anyone
        if request.method in ("POST",):
            return True

        # allow other permissions if is owner
        return CustomUser.objects.filter(username=request.user).exists()


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [CustomUserPermission]

    # over write get queryset to only return requested user
    def get_queryset(self):
        return CustomUser.objects.filter(username=self.request.user)
