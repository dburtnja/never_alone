from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.json_test_request, name='test_request'),
    path(r"get_user/", views.get_user, name='get_user')
]
