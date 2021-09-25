"""
One of the key benefits of class-based views is the way they allow you to compose bits of reusable behavior. REST framework takes advantage of this by providing a number of pre-built views that provide for commonly used patterns.

The generic views provided by REST framework allow you to quickly build API views that map closely to your database models.

If the generic views don't suit the needs of your API, you can drop down to using the regular APIView class, or reuse the mixins and base classes used by the generic views to compose your own set of reusable generic views.

The mixin classes provide the actions that are used to provide the basic view behavior. Note that the mixin classes provide action methods rather than defining the handler methods, such as .get() and .post(), directly. This allows for more flexible composition of behavior.

The mixin classes can be imported from rest_framework.mixins.

Place below into urls.py

router = DefaultRouter()
router.register("posts", PostViewSet, basename="posts")
urlpatterns = [
    path("", include(router.urls))
]
"""

from rest_framework import mixins, viewsets


from ..models import Post
from ..serializers import PostSerializer


class PostViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
