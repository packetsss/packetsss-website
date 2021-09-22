from django.conf.urls import include
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet

router = DefaultRouter()
router.register("articles", ArticleViewSet, basename="articles")

urlpatterns = [
    path("", include(router.urls)),
]
