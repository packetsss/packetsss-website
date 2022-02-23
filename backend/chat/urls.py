from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import FileUploadModelView, MessageView

app_name = "chat"

# using routers for ViewSet
router = DefaultRouter(trailing_slash=False)
router.register("file_upload", FileUploadModelView)
router.register("message", MessageView)

urlpatterns = [
    path("", include(router.urls)),
]

