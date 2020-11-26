from django.contrib import admin
from .models import *
from django.contrib.auth.admin import  UserAdmin
# Register your models here.



#class compteAdmin(UserAdmin):
    #list_display = ('owner', 'CIN', 'created')
    #search_fields = ('owner', 'CIN')
    #readonly_fields = ('created', 'last_login')

    #filter_horizontal = ()
    #list_filter = ()
    #fieldsets = ()



#admin.site.register(user_profile, compteAdmin)
admin.site.register(reclamation)
admin.site.register(user_profile)
