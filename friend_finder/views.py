from django.shortcuts import render
import pyrebase
from friend_finder.models import Place, User, Event
from django.views.generic.base import TemplateView
from django.http import JsonResponse, HttpResponseNotFound, HttpResponseNotAllowed
import json
from .models import User

# Create your views here.


def get_user(request):
    if request.method != "GET":
        return HttpResponseNotAllowed(["GET"])

    id = request.GET.get("id")
    users = User.objects.filter(id=id)

    if len(users) == 0:
        return HttpResponseNotFound()
    user_data = users[0]

    return JsonResponse({
        "name": user_data.name,
        "status": user_data.status,
        "picture": user_data.image_url
    })
