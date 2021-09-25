"""
Place below into urls.py

urlpatterns = [
    path("posts/", post_list),
    path("posts/<int:primary_key>/", post_details),
]
"""

from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from ..models import Post
from ..serializers import PostSerializer


@api_view(["GET", "POST"])
def post_list(request):
    if request.method == "GET":  # grab from frontend
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    elif request.method == "POST":  # send data to frontend
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def post_details(request, primary_key):
    try:
        post = Post.objects.get(pk=primary_key)
    except Post.DoesNotExist:
        return Response("Post not found", status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PostSerializer(post)
        return Response(serializer.data)
    elif request.method == "PUT":  # update frontend
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        post.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
