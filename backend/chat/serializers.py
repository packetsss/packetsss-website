from django.conf import settings
from rest_framework import serializers

from .models import GenericFileUpload

class GenericFileUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = GenericFileUpload
        fields = "__all__"
