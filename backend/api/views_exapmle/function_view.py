"""
Place below into urls.py

urlpatterns = [
    path("articles/", article_list),
    path("articles/<int:primary_key>/", article_details),
]
"""

from django.shortcuts import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from ..models import Article
from ..serializers import ArticleSerializer


@api_view(["GET", "POST"])
def article_list(request):
    if request.method == "GET":  # grab from frontend
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data)
    elif request.method == "POST":  # send data to frontend
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
def article_details(request, primary_key):
    try:
        article = Article.objects.get(pk=primary_key)
    except Article.DoesNotExist:
        return Response("Article not found", status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    elif request.method == "PUT":  # update frontend
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        article.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)
