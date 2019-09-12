from django.shortcuts import render
import pyrebase
from friend_finder.models import Place, User, Event
from django.views.generic.base import TemplateView

# Create your views here.

config = {

}


class BaseView(TemplateView):
    print("Hello")
