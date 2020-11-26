from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import *
#from annonce.models import *
from rest_framework.response import Response



class reclamation_Serializer(serializers.ModelSerializer):
    class Meta:
        model = reclamation
        fields = '__all__'


class profile_serializer(serializers.ModelSerializer):
    class Meta:
        model = user_profile
        fields = '__all__'
       



