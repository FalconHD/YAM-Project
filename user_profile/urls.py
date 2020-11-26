from django.urls import path,include
from .views import *
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/profile', user_profileViewset,'prof')
router.register('api/profiles', user_profileViewsetAll,'prof')


urlpatterns = router.urls
    