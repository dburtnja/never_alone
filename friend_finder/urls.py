from django.urls import path
from . import views

urlpatterns = [
    path(r'', views.json_test_request, name='test_request'),
    path(r"get_user/", views.get_user, name='get_user'),
    path(r'get_event/', views.get_event_info, name='get_event_info'),
    path(r'get_user_current_events/', views.get_user_current_events,
         name='get_user_current_events'),
    path(r'follow_event/', views.follow_event, name='follow_event'),
    path(r"create_user", views.create_user, name='create_user'),
]
