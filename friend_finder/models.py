from django.db import models


class Place(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.CharField(max_length=256, blank=True, null=True)
    location = models.CharField(max_length=64, unique=True, null=True)
    image_url = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name


class User(models.Model):
    nick = models.CharField(max_length=64, unique=True, null=True)
    name = models.CharField(max_length=64)
    mail = models.CharField(max_length=64, unique=True, blank=True, null=True)
    image_url = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=64, null=True)

    def __str__(self):
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=64, unique=True)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    creator = models.ForeignKey(User, on_delete=models.CASCADE,
                                related_name='user_creator',
                                null=True)
    timestamp = models.DateTimeField()
    note = models.CharField(max_length=256, blank=True, null=True)
    people_amount = models.ManyToManyField(User, blank=True)
    drinks_amount = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name
