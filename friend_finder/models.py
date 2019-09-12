from django.db import models
from django.contrib.gis.db import models


class Place(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.CharField(max_length=256, blank=True, null=True)
    loc_lat = models.FloatField()
    loc_lon = models.FloatField()
    image_url = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class User(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.CharField(max_length=256, blank=True, null=True)

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=64, unique=True)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    user = models.ManyToManyField(User, on_delete=models.CASCADE())
    timestamp = models.DateTimeField()
    description = models.CharField(max_length=256, blank=True, null=True)

    def __str__(self):
        return self.name
