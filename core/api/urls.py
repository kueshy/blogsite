from django.urls import path, include
from .views import CreatePost, PostList

urlpatterns = [
    path("posts/", PostList.as_view()),
    path("post/create/", CreatePost.as_view()),
]
