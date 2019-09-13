from django.shortcuts import render
import pyrebase
from friend_finder.models import Place, User, Event
from django.views.generic.base import TemplateView
from django.http import JsonResponse, \
    HttpResponseNotFound, HttpResponseBadRequest, HttpResponseNotAllowed,\
    HttpResponse
import json
from .models import User
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime, timedelta
from django.utils.timezone import make_aware



# Create your views here.


def get_required_fields(model):
    fields = model._meta.get_fields()
    required_fields = []

    for field in fields:
        if hasattr(field, 'blank') and field.blank is False:
            required_fields.append(field.name)
    return required_fields


def all_required_present(model, request_data):
    reqired_fields = get_required_fields(model)
    if not all(field_name in request_data for field_name in reqired_fields):
        return False
    return True


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


def get_event_info(request):
    if request.method != "GET":
        return HttpResponseNotAllowed(["GET"])

    event_id = request.GET.get("event_id")
    event = Event.objects.filter(id=event_id).first()
    if event:
        people = list(event.people_amount.all().values_list('pk', flat=True))

        return JsonResponse({"event_name": event.name,
                             "place": event.place.name,
                             "place_location": event.place.location,
                             "drinks_amount": event.drinks_amount,
                             "timestamp": event.timestamp,
                             "note": event.note,
                             "people_ids": people})
    else:
        return HttpResponseNotFound()


def get_user_current_events(request):
    if request.method != "GET":
        return HttpResponseNotAllowed(["GET"])

    user_id = request.GET.get("user_id")
    time_threshold = make_aware(datetime.now() - timedelta(hours=8))
    print(user_id)

    user_events = Event.objects.filter(
        people_amount__in=user_id,
        timestamp__gte=time_threshold)
    if user_events:
        return JsonResponse({"event_id": [event.id for event in user_events],
                             "event_name": [event.name for event in user_events],
                             "event_location": [event.place.location for event in user_events]})
    else:
        return HttpResponseNotFound()


@csrf_exempt
def create_user(request):
    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"])

    if not request.body:
        return HttpResponseNotFound()
    request_data = json.loads(request.body)

    if not all_required_present(User, request_data):
        reqired_fields = get_required_fields(User)
        return HttpResponseBadRequest("Required fields: " + str(reqired_fields))

    user_data = User.objects.create(**request_data)
    return JsonResponse({"id": user_data.id})


@csrf_exempt
def follow_event(request):
    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"])

    if not request.body:
        return HttpResponseNotFound()

    request_data = json.loads(request.body)
    required_fields = ["user_id", "event_id"]
    if not all(field_name in request_data for field_name in required_fields):
        return HttpResponseBadRequest("Required fields: " + str(required_fields))

    event = Event.objects.get(pk=request_data["event_id"])
    user = User.objects.get(pk=request_data["user_id"])
    event.people_amount.add(user)
    event.save()

    return HttpResponse(status=200)


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


@csrf_exempt
def create_event(request):
    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"])

    if not request.body:
        return HttpResponseNotFound("Body is empty")
    request_data = json.loads(request.body)

    if "place" not in request_data:
        return HttpResponseBadRequest("No place key in request!")

    place_data = request_data.pop("place")

    if not all_required_present(Place, place_data):
        place_required_fields = get_required_fields(Place)
        return HttpResponseBadRequest("Required place fields: " + str(place_required_fields))

    if "id" not in request_data:
        return HttpResponseBadRequest("Id field is required")

    place_obj = Place.objects.create(**place_data)
    user_obj = User.objects.filter(id=request_data.pop("id"))
    event_data = {
        **request_data,
        "creator": user_obj,
        "place": place_obj,
        "people_amount": user_obj
    }

    if not all_required_present(Event, event_data):
        event_required_fields = get_required_fields(Event)
        return HttpResponseBadRequest("Required fields: " + str(event_required_fields))

    event_object = Event.objects.create(**event_data)
    return JsonResponse({"id": event_object.id})
