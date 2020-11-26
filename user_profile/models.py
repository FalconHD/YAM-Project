from django.db import models

from django.contrib.auth.models import User

# Create your models here.

def first_veri(k):
    if(not k[0].isdigit()):
        if(not k[1].isdigit()):
            return True
        for x in k[2::]:
            if x.isdigit():
                continue
            else:
                return False
        return True
    else:
        return False

def validate_cin(val):
    if first_veri(val):
        s= val.split()
        i=[]
        t=[]
        for x in val :
            if x.isdigit():
                x=int(x)
                i.append(x)
            elif type(x) == str:
                t.append(x)
        if len(i) == 6 and len(t)<=3:
            p = 'positive verification'
            return p
        else:
            n = 'verivication failed, im calling FBI'
            raise ValidationError(n)
    else:
        raise ValidationError('u dumpass r u even a morrocan')



class user_profile(models.Model):



    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)
    Nation = models.CharField(max_length=10)
    City = models.CharField(max_length=10)
    Description = models.CharField(max_length=200)
    image_profile = models.ImageField(upload_to='static_server/media/images', blank=True)
    Cover = models.ImageField(upload_to='static_server/media/images', blank=True)
    CIN = models.CharField(max_length=10, validators=[validate_cin])
    visiblty = False
    nutifiction = []

    owner = models.ForeignKey(User,related_name="prof" , on_delete=models.CASCADE , null=True)


    created = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)


    def delete_cmpt(self):
        if self.visiblty == False:
            self.visiblty = True
        else:
            raise ValidationError("!!! but, wut!!!")


    def get_url(self):
        return f'home/users/{self.pk}/MaybeDumpOne/{self.owner.username}'

    def get_created_time(self):
        msg = '{:%A %B, D%,  time %H:%M:%S.}'
        return msg.format(self.created)

    def get_last_login(self):
        msg = '{:%A %B, D%,  time %H:%M:%S.}'
        return msg.format(self.last_login)


    def __str__(self):
        return f'{self.owner.username}'

    class Meta:
        #ordering = ('-created',)
        unique_together = ('CIN',)



class reclamation(models.Model):

    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    reclamation = models.TextField()
    visiblty = False

    def get_url(self):
        return f'home/users/reclamation/{self.owner.username}/MaybeDumpOne/{self.pk}'
    def __str__(self):
        return f'id: {self.pk} {self.owner.username}'
