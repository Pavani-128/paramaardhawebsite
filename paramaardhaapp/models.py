from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="services/", blank=True, null=True)

    def __str__(self):
        return self.name

class SubService(models.Model):
    service = models.ForeignKey(Service, related_name="sub_services", on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="subservices/", blank=True, null=True)

    def __str__(self):
        return f"{self.name} ({self.service.name})"
