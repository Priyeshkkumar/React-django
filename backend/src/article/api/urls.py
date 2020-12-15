from django.urls import path
from rest_framework.routers import DefaultRouter

from article.api.views import ArticleViewSet

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls


# from .views import (
#     ArticleListView,
#     ArticleDetailView,
#     ArticleDeleteView,
#     ArticleUpdateView)

# urlpatterns = [
#     path('', ArticleListView.as_view(), name="list"),
#     path('<pk>', ArticleDetailView.as_view(), name="detail"),
#     path('<pk>/update/', ArticleUpdateView.as_view(), name="detail"),
#     path('<pk>/delete/', ArticleDeleteView.as_view(), name="detail")
# ]
