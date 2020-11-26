from django.db import models
from django.contrib.auth.models import User
from enum import  Enum
# Create your models here.

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User,related_name="leads" , on_delete=models.CASCADE , null=True)
    created_at = models.DateTimeField(auto_now_add=True)


class type_bagages(Enum):

    pas_bgg = ('without Goods', 'without Goods')
    bgg_normal = ('normal Goods', 'normal Goods')
    bgg_lourd = ('heavy Goods', 'heavy Goods')
    bgg_tr_lourd = ('very heavy Goods', 'very heavy Goods')

    def __str__(self):
        return f'{self.value}'

    @classmethod
    def get_type(cls, type):
        return cls[type].value[1]

class type_service(Enum):

    livreur = ('Shipper', 'livreur')
    bagages = ('Request', 'bagages')

    @classmethod
    def get_type(cls, type):
        return cls[type].value[1]






 



class annonce(models.Model):
    
    
    lieu_depart = models.CharField(max_length=50 , default='SOME STRING' ,null=True)
    lieu_arrive = models.CharField(max_length=50 , default='SOME STRING' , null=True)
    date_depart = models.DateTimeField(max_length=50,null=True)
    date_arrive = models.DateTimeField(max_length=50,null=True)
    is_accepted = models.BooleanField(default=False ,null=True)

    num_tele = models.IntegerField(  null=True)
    ville = models.CharField(max_length=30 ,null=True)
    bagages = models.CharField(max_length=16, choices=[x.value for x in type_bagages] , null=True)
    comment = models.TextField(max_length=200 , null=True)
    visiblty = False
    created = models.DateTimeField(auto_now_add=True , null=True)
    updated = models.DateTimeField(auto_now=True , null=True)

    def get_depart(self):
            msg = 'depart : {:%b %d %Y  time: %H:%M}} '
            print(msg.format(self.date_depart))

    def __str__(self):
        return f'{self.pk}'
  






    def __str__(self):
        return f'{self.pk}, {self.User}'

    

    def get_created_time(self):
        msg = '{:%b %d %Y  time: %H:%M} '
        return msg.format(self.created)

    def get_updated_time(self):
        msg = '{:%b %d %Y  time: %H:%M}} '
        return msg.format(self.updated)

    class Meta:
        abstract = True
        ordering = ('-created', 'ville')



#type d annonces
TYPE_ANNONCE = ['AD','AO','AV','L']


#les classes d annonces
class annonce_ville(annonce):
    owner = models.ForeignKey(User,related_name="ville" , on_delete=models.CASCADE , null=True)
    lieu = models.CharField(max_length=30)
    distination = models.CharField(max_length=30)
    num_places = models.IntegerField()
    TYPE = TYPE_ANNONCE[2]

class Livraison(annonce):
    ville_distination = models.CharField(max_length=50, default='SOME STRING' , null=True)
    owner = models.ForeignKey(User,related_name="Liv" , on_delete=models.CASCADE , null=True)
    service = models.CharField(max_length=10, choices=[x.value for x in type_service])
    TYPE = TYPE_ANNONCE[3]
    

class annonce_demande(annonce):
    ville_distination = models.CharField(max_length=50, default='SOME STRING' , null=True)
    owner = models.ForeignKey(User,related_name="D_annonce" , on_delete=models.CASCADE , null=True)
    num_personnes = models.IntegerField()
    TYPE = TYPE_ANNONCE[0]
    


    


class annonce_offrir(annonce):
    ville_distination = models.CharField(max_length=50, default='SOME STRING' , null=True)
    owner = models.ForeignKey(User,related_name="O_annonce" , on_delete=models.CASCADE , null=True)
    num_places = models.IntegerField()
    car_model = models.CharField(max_length=30)
    TYPE = TYPE_ANNONCE[1]
    
