from django.shortcuts import render
import pyrebase
from friend_finder.models import Place, User, Event
from django.views.generic.base import TemplateView
from django.http import JsonResponse, \
    HttpResponseNotFound, HttpResponseBadRequest, HttpResponseNotAllowed
import json
from .models import User
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def get_required_fields(model):
    fields = model._meta.get_fields()
    required_fields = []

    for field in fields:
        if hasattr(field, 'blank') and field.blank is False:
            required_fields.append(field.name)
    return required_fields


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


@csrf_exempt
def create_user(request):
    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"])

    if not request.body:
        return HttpResponseNotFound()
    request_data = json.loads(request.body)

    reqired_fields = get_required_fields(User)
    if not any(field_name in request_data for field_name in reqired_fields):
        return HttpResponseBadRequest("Required fields: " + str(reqired_fields))

    user_data = User.objects.create(**request_data)
    return JsonResponse({"id": user_data.id})

def get_events(request):
    if request.method != "GET":
        return HttpResponseNotAllowed(["GET"])

    events = Event.objects.all()
    if len(events) == 0:
        return HttpResponseNotFound()

    events_data = []
    for ev in events:
        event = {
        "event_id": ev.id,
        "coordinates": ev.place.location
        }
        events_data.append(event)
    return JsonResponse({
        "events": events_data
    })

