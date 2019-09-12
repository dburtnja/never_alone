from django.urls import path
from . import views

urlpatterns = [
    path(r"get_user/", views.get_user, name='get_user'),
    path(r"create_user", views.create_user, name='create_user'),
]
