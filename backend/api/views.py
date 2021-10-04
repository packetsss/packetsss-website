from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from .models import Post
from .serializers import PostSerializer, UserSerializer


class PostUserWritePermission(BasePermission):
    message = "Editing posts is restricted to the author only"

    def has_object_permission(self, request, view, obj):
        # if is not author, only allow get, option, head
        if request.method in SAFE_METHODS:
            return True

        # if is author, allow put and delete
        return obj.author == request.user


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [
        PostUserWritePermission,
    ]  # require token to get from posts
    # authentication_classes = [
    #     TokenAuthentication,
    # ]  # allow use to get using tokens

    # def get_queryset(self):
    #     print(Post.objects.all())
    #     return Post.objects.all()

    """
    Custom CRUD (C) function

    def create(self, request):
        data = request.data
        print(data)
        data.update({"owner_id": data["owner_id"][0]["id"]})

        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    """


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

#     # over write get queryset to only return requested user token
#     def get_queryset(self):
#         user_token = Token.objects.get(
#             key=self.request.headers["Authorization"].split()[1]
#         )
#         return self.queryset.filter(username=user_token.user)
