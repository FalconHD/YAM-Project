from django.contrib.auth.models import User
from backend.models import Lead , Livraison ,annonce_demande ,annonce_ville ,annonce_offrir
from rest_framework import viewsets, permissions ,generics
from .Serializers import LeadSerialiser ,LivraisonSerialiser ,DemandeSerialiser ,VilleSerialiser,OffrirSerialiser
from rest_framework.response import Response

class LeadViewsetAll(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = LeadSerialiser



    def get_queryset(self):
        return Lead.owner

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)



    def list(self, request):
        queryset = Lead.objects.all()
        serializer = LeadSerialiser(queryset, many=True)
        return Response(serializer.data)


class LeadViewset(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerialiser

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)




class LivraisonViewsetAll(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = LivraisonSerialiser



    def get_queryset(self):
        return Livraison.owner

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)



    def list(self, request):
        queryset = Livraison.objects.all()
        serializer = LivraisonSerialiser(queryset, many=True)
        return Response(serializer.data)





class LivViewset(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = LivraisonSerialiser

    def get_queryset(self):
        return self.request.user.Liv.all()

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)




class DemondeViewsetAll(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = DemandeSerialiser



    def get_queryset(self):
        return annonce_demande.owner

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)



    def list(self, request):
        queryset = annonce_demande.objects.all()
        serializer = DemandeSerialiser(queryset, many=True)
        return Response(serializer.data)





class DemondeViewset(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = DemandeSerialiser
    
    def get_queryset(self):
        return self.request.user.D_annonce.all()

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)
    


    




class VilleViewsetAll(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = VilleSerialiser



    def get_queryset(self):
        return annonce_ville.owner

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)



    def list(self, request):
        queryset = annonce_ville.objects.all()
        serializer = VilleSerialiser(queryset, many=True)
        return Response(serializer.data)





class VilleViewset(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = VilleSerialiser
    
    def get_queryset(self):
        return self.request.user.ville.all()

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    







    
class OffrirViewsetAll(viewsets.ModelViewSet):
    permission_classes=[
        permissions.AllowAny
    ]
    serializer_class = OffrirSerialiser



    def get_queryset(self):
        return annonce_offrir.owner

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)



    def list(self, request):
        queryset = annonce_offrir.objects.all()
        serializer = OffrirSerialiser(queryset, many=True)
        return Response(serializer.data)





class OffrirViewset(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated
    ]
    serializer_class = OffrirSerialiser
    
    def get_queryset(self):
        return self.request.user.O_annonce.all()

    def perform_create(self,Serializer):
        Serializer.save(owner=self.request.user)
    