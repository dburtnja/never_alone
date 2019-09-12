from django.shortcuts import render
import pyrebase
from friend_finder.models import Place, User, Event
from django.views.generic.base import TemplateView
from django.http import JsonResponse

# Create your views here.


def json_test_request(request):
    return JsonResponse({"request body": "request.body"})
