"""
A simple ViewSet for viewing and editing accounts.

Since ModelViewSet extends GenericAPIView, you'll normally need to provide at least the queryset and serializer_class attributes

Place below into urls.py

router = DefaultRouter()
router.register("articles", ArticleViewSet, basename="articles")
urlpatterns = [
    path("", include(router.urls))
]
"""

from rest_framework import viewsets

from ..models import Article
from ..serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
