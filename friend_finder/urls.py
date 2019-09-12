from django.urls import path
from . import views

urlpatterns = [
    path('', views.json_test_request, name='test_request'),
]