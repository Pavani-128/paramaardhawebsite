from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet,SubServiceViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r"subservices", SubServiceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    
]
