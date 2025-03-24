from rest_framework import serializers
from .models import Service, SubService

class SubServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubService
        fields = "__all__"

class ServiceSerializer(serializers.ModelSerializer):
    sub_services = SubServiceSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = "__all__"
