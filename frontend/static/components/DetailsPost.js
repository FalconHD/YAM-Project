import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {getProfiles } from '../actions/UserActions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




toast.configure();

class DetailsPost extends Component {

    static propTypes = {
        Post: PropTypes.array.isRequired,
        profiles : PropTypes.array.isRequired,
        
    }
   
    
    componentDidMount(){
        
        
        this.props.getProfiles();
        setTimeout(function(){ 
            var departTime = document.querySelectorAll(".departTime");
            departTime.forEach(function(cnt) {
                
                cnt.innerHTML =  cnt.innerHTML.slice(11, 16);
              });
              var departTime = document.querySelectorAll(".departdate");
            departTime.forEach(function(cnt) {
                
                cnt.innerHTML =  cnt.innerHTML.slice(0, 10);
              });
              var departTime = document.querySelectorAll(".ArrivalTime");
            departTime.forEach(function(cnt) {
                
                cnt.innerHTML =  cnt.innerHTML.slice(11, 16);
              });

         }, 800); 
       

    
    }
    getName = (id,props) =>{
            
        for(var i = 0;i<this.props.profiles.length;i++){
            if(this.props.profiles[i].owner === id){
                return(
                    <div>
                    <span> 
                    <div><h6>userName : {this.props.profiles[i].first_name}</h6></div>
                      <div><h6>lastName : {this.props.profiles[i].last_name}</h6></div>
                      <div><h6>CIN : {this.props.profiles[i].CIN}</h6></div>
                </span> 
                 <span> 
                    <div><h6>Nation : {this.props.profiles[i].Nation}</h6></div>
                   <div><h6>City : {this.props.profiles[i].City}</h6></div>
                   <div><h6>Description : {this.props.profiles[i].Description}</h6></div>
             </span> 

             </div>
                )
               
         }
         
        }
        
           
       
        }
        getImg = (id,props) =>{
            
            for(var i = 0;i<this.props.profiles.length;i++){
                if(this.props.profiles[i].owner === id){
                    var img = document.querySelectorAll(".profil-Img");
                    
                   var urll = this.props.profiles[i].image_profile
                   for (var j=0 ; j < img.length; j++) {
                    img[j].style.backgroundImage = `url("http://127.0.0.1:8000${this.props.profiles[i].image_profile}")`
                    
                }
                   
                    
                    
            }
              
            }
                    
                       
                   
        }

        Notify = () =>{
            toast.success("Request Submitted Successfully !!!" , {position : toast.POSITION.TOP_CENTER})
            const check = document.getElementById('check');
            check.style.color = "#07bc0c"
        }
        
    
    render() {
       
        return (
            <div class="Confirmation-Posts">
                
                {this.props.Post.map(Post =>(
                <div key={Post.id} className="confirme-Container" >
                    <h5>User Info :</h5>
                <section class="profil-info">
                        <div className="profil-Img" onLoad={this.getImg(Post.owner)}>
                        </div>
                        
                        {this.getName(Post.owner)} 
                        
                            
		        </section>
               <h5>Post Info :</h5>
                <section class="Post-Info">
                
              
             <span>
                <div><h6>From :{Post.lieu_depart}</h6></div>
                <div><h6>To :{Post.lieu_arrive}</h6></div>
                <div><h6>Going Date :{Post.date_depart}</h6></div>
                <div><h6>Arrival Date :{Post.date_arrive}</h6></div>
                {Post.num_places?<div><h6>Number Of Places :{Post.num_places}</h6></div>: null}
                {Post.car_model ?<div><h6>Car Model :{Post.car_model }</h6></div> : null}
                {Post.service ?<div><h6>service :{Post.service }</h6></div> : null}
                {Post.num_personnes ?<div><h6>Number Of places :{Post.num_personnes }</h6></div> : null}
                {Post.lieu ?<div><h6>Exact Place :{Post.lieu }</h6></div> : null}
                
                </span>

                <span>
              
              <div><h6>Phone Number :{Post.num_tele}</h6></div>
              <div><h6>City :{Post.ville}</h6></div>
              <div><h6>Goods Type :{Post.bagages}</h6></div>
              <div><h6>Comment :{Post.comment}</h6></div>
              <div><h6>Destination :{Post.ville_distination ? Post.ville_distination : Post.distination}</h6></div>
              </span>
              
          
            
                   
                    
                </section>
                <div className="check" >
                <i id='check' onClick={this.Notify} class="fas fa-calendar-check"></i>
                </div>
                
            
            
            </div>
            ))}


                

            </div>
        )
    }
}
const mapStateToProps = state => ({
    Posts: state.CovoiturageReducer.annonces,
    Post: state.CovoiturageReducer.Post,
    profiles: state.UserReducer.Profiles,
    
});

export default connect(mapStateToProps,{getProfiles})(DetailsPost) ;