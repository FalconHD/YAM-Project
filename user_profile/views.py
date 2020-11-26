from django.shortcuts import render

from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser


from rest_framework.response import Response
from rest_framework import status, generics, mixins
from rest_framework.views import APIView
from .serializers import *

from django.conf import settings

from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny, IsAdminUser
from rest_framework.authentication import TokenAuthentication

from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView

from django.contrib.auth import login


from knox.models import AuthToken
# Create your views here.















class user_profileViewsetAll(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = profile_serializer
    

    def get_queryset(self):
        return user_profile.id

  
    


    def list(self, request):
        queryset = user_profile.objects.all()
        serializer = profile_serializer(queryset, many=True)
        return Response(serializer.data)





class user_profileViewset(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = profile_serializer

    def get_queryset(self):
        return self.request.user.prof.all()

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)
    #def put(self, request, *args, **kwargs):
    #    return self.update(request, *args, **kwargs)
    #def post(self, request, format=None):
     #   return Response("Added")
   
