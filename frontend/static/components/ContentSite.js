import React, { Fragment } from "react";
import tranImg from '../undraw1.svg'
import covImg from '../undraw2.svg'
import livImg from '../undraw3.svg'
import {
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import css from '../style.css'
import Transport from './Transport'
import Covoiturage from './Covoiturage'
import Shipping from './Shipping'
import Leads from "./leads";
import CovAdd from './Forms/CovForms/UserForm'
import TransAdd from './Forms/TransForms/UserForm'
import LivAdd from './Forms/LivForms/UserForm'
import CovPostsO from './AnnoncesPosts/CovoituragePostsO'
import CovPostsR from './AnnoncesPosts/CovoituragePostsR'
import ShipPosts from './AnnoncesPosts/ShippingPosts'
import TransPosts from './AnnoncesPosts/TransportPosts'
import Profile from "./Profile";
import ProfileUpdate from './Forms/UpdateProfile'
import ProfileAdd from './Forms/AddProfile'
import TransUpdate from './Forms/UpdateTransForms/UpdateMyTransPost'
import CovUpdate from './Forms/UpdateCovForms/UpdateMyCovPost'
import CovrUpdate from './Forms/UpdateCovForms/UpdateMyCovrPost'
import ShipUpdate from './Forms/UpdateShipForms/UpdateMyShipPost'
import CovCityPostsC from './AnnoncesPosts/CovPostsCityC'
import CovCityPostsM from './AnnoncesPosts/CovPostsCityM'
import ShipCityPostsC from './AnnoncesPosts/ShipPostsCityC'
import ShipCityPostsM from './AnnoncesPosts/ShipPostsCityM'
import TransCityPostsC from './AnnoncesPosts/TransPostsCityC'
import TransCityPostsM from './AnnoncesPosts/TransPostsCityM'
import DetailsPost from './DetailsPost'
import Abouteam from './Abouteam.js'
import ContactUs from './ContactUs.js'




 class Modal extends React.Component {
    
componentDidMount(){
    document.getElementById('Add-An').addEventListener("click", function() {
        document.querySelector('.bg-modal-choose').style.display = "flex";
    });
    
    const closeModal = document.querySelectorAll('.closeModal');
    
    closeModal.forEach(element => {
      element.addEventListener("click", function() {
        document.querySelector('.bg-modal-choose').style.display = "none";
    });
      });


}


render() {
  return (
    <Fragment>
      <div  className="Content-container">
        
        <div className="bg-modal">
            
            
          
          
          <Route  path="/leads/livraison_Add"  component={LivAdd}/>
          <Route  path="/leads/Covoiturage_Add"  component={CovAdd}/>
          <Route  path="/leads/Transport_Add"  component={TransAdd}/>
          <Route  path="/leads/Covoiturage_Offers"  component={CovPostsO}/>
          <Route  path="/leads/Covoiturage_Requests"  component={CovPostsR}/>
          <Route  path="/leads/Shipping_Posts"  component={ShipPosts}/>
          <Route  path="/leads/Transport_Posts"  component={TransPosts}/>
          <Route  path="/leads/profil"  component={Profile}/>
          <Route  path="/leads/Shipping_Update"  component={ShipUpdate}/>
          <Route  path="/leads/Covoiturage_Update"  component={CovUpdate}/>
          <Route  path="/leads/Transport_Update"  component={TransUpdate}/>
          <Route  path="/leads/modifyMyProfil"  component={ProfileUpdate}/>
          <Route  path="/leads/AddMyProfil"  component={ProfileAdd}/>
          <Route path="/leads/CovCityPostsC"  component={CovCityPostsC}/>
          <Route path="/leads/CovCityPostsM"  component={CovCityPostsM}/>
          <Route path="/leads/ShipCityPostsC"  component={ShipCityPostsC}/>
          <Route path="/leads/ShipCityPostsM"  component={ShipCityPostsM}/>
          <Route path="/leads/TransCityPostsC"  component={TransCityPostsC}/>
          <Route path="/leads/TransCityPostsM"  component={TransCityPostsM}/>
          <Route path="/leads/CovCity"  component={Covoiturage}/>
          <Route path="/leads/ShipCity"  component={Shipping}/>
          <Route path="/leads/TransCity"  component={Transport}/>
          <Route path="/leads/Details"  component={DetailsPost}/>
          <Route path="/leads/About-Team"  component={Abouteam}/>
          <Route path="/leads/ContactUS"  component={ContactUs}/>
          
        
       </div>
      
     
      </div>               
                      
    </Fragment>       
    
  );
}


}

export default React.memo(Modal);