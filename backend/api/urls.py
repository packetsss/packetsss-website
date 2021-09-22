from django.conf.urls import include
from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import ArticleViewSet, UserViewSet

# using routers for ViewSet
router = DefaultRouter()
router.register("articles", ArticleViewSet, basename="articles")
router.register("users", UserViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
