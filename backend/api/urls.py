from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

from .views import PostViewSet

app_name = "blog"

# using routers for ViewSet
router = DefaultRouter()
router.register("posts", PostViewSet, basename="posts")

urlpatterns = [
    
    path("", include(router.urls)),
]
