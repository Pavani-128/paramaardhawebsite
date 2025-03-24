from rest_framework import viewsets
from .models import Service,SubService
from .serializers import ServiceSerializer,SubServiceSerializer
from rest_framework.parsers import MultiPartParser, FormParser

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    parser_classes = (MultiPartParser, FormParser)  # Allow image uploads

class SubServiceViewSet(viewsets.ModelViewSet):
    queryset = SubService.objects.all()
    serializer_class = SubServiceSerializer

    def get_queryset(self):
        service_id = self.request.query_params.get("service_id")
        if service_id:
            return SubService.objects.filter(service_id=service_id)
        return super().get_queryset()
