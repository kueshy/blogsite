from django.db import models


def upload_to(instance, filename):
    return "image/{filename}".format(filename=filename)


# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=80, blank=False, null=False)
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
