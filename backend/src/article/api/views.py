from rest_framework.generics import ListAPIView, RetrieveAPIView
from article.models import Article
from .serializer import ArticleSerializer


class ArticleListView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class ArticleDetailView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
