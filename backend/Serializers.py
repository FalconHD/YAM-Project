from rest_framework import serializers
from backend.models import Lead ,Livraison,annonce_demande,annonce_ville,annonce_offrir


class LeadSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

class LivraisonSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Livraison
        #fields = ('id','num_tele', 'ville', 'bagages', 'comment','service' , 'owner')
        fields = '__all__'

class DemandeSerialiser(serializers.ModelSerializer):
    class Meta:
        model = annonce_demande
        #fields = ('id','num_tele', 'ville', 'bagages', 'comment','num_personnes' , 'owner')
        fields = '__all__'


class VilleSerialiser(serializers.ModelSerializer):
    class Meta:
        model = annonce_ville
        #fields = ('id','num_tele', 'ville', 'bagages', 'comment','distination' ,'num_places','lieu', 'owner')
        fields = '__all__'

class OffrirSerialiser(serializers.ModelSerializer):
    class Meta:
        model = annonce_offrir
        #fields = ('id','num_tele', 'ville', 'bagages', 'comment','num_places' ,'car_model', 'owner')
        fields = '__all__'
    