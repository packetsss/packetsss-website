from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import GenericFileUploadView

app_name = "chat"

# using routers for ViewSet
router = DefaultRouter(trailing_slash=False)
router.register("file_upload", GenericFileUploadView, basename="file_upload")
urlpatterns = [
    path("", include(router.urls)),
]
