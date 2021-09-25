from rest_framework import viewsets
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from .models import Post
from .serializers import PostSerializer, UserSerializer



class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]  # require token to get from posts
    authentication_classes = (TokenAuthentication,)  # allow use to get using tokens
    
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


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # over write get queryset to only return requested user token
    def get_queryset(self):
        user_token = Token.objects.get(
            key=self.request.headers["Authorization"].split()[1]
        )
        return self.queryset.filter(username=user_token.user)
