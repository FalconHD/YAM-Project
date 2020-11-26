from rest_framework import routers
from .api import LeadViewset ,LeadViewsetAll ,LivraisonViewsetAll ,LivViewset ,DemondeViewsetAll ,DemondeViewset,VilleViewset,VilleViewsetAll,OffrirViewsetAll,OffrirViewset
from knox import views as knox_views


router = routers.DefaultRouter()
router.register('api/Leads', LeadViewset,'leads'),
router.register('api/LivAll', LivraisonViewsetAll,'LivAll')
router.register('api/Liv', LivViewset,'Liv')
router.register('api/Leadsall', LeadViewsetAll,'leadsall')
router.register('api/Dannonces', DemondeViewsetAll,'demondeall')
router.register('api/Dannonce', DemondeViewset,'D_annonce')
router.register('api/Vannonces', VilleViewsetAll,'Villeeall')
router.register('api/Vannonce', VilleViewset,'V_annonce')
router.register('api/Oannonces', OffrirViewsetAll,'Offrirall')
router.register('api/Oannonce', OffrirViewset,'O_annonce')



urlpatterns = router.urls
