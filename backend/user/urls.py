from django.urls import path
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

from .views import CustomUserViewSet

app_name = "users"

router = DefaultRouter()
router.register("", CustomUserViewSet, basename="user")

urlpatterns = [
    # create new user
    path("", include(router.urls)),
    
]
