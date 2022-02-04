from rest_framework import viewsets
from django.shortcuts import render

from .models import GenericFileUpload
from .serializers import GenericFileUploadSerializer


class GenericFileUploadView(viewsets.ModelViewSet):
    queryset = GenericFileUpload.objects.all()
    serializer_class = GenericFileUploadSerializer
    # permission_classes = [
    #     PostUserWritePermission,
    # ]  # require token to get from posts
