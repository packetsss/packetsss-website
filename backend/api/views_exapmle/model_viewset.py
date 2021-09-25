"""
A simple ViewSet for viewing and editing accounts.

Since ModelViewSet extends GenericAPIView, you'll normally need to provide at least the queryset and serializer_class attributes

Place below into urls.py

router = DefaultRouter()
router.register("posts", PostViewSet, basename="posts")
urlpatterns = [
    path("", include(router.urls))
]
"""

from rest_framework import viewsets

from ..models import Post
from ..serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
