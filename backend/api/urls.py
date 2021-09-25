from django.urls import path
from django.conf.urls import url
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

from .views import PostViewSet, UserViewSet

# using routers for ViewSet
router = DefaultRouter()
router.register("posts", PostViewSet, basename="posts")
router.register("users", UserViewSet, basename="users")

urlpatterns = [
    path("api/", include(router.urls)),
]
