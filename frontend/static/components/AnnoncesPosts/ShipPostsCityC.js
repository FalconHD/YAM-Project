import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getShipPosts } from '../../actions/CovoiturageActions';
import {getProfiles } from '../../actions/UserActions';

class ShippingPosts extends Component {
    static propTypes = {
        Posts: PropTypes.array.isRequired,
        profiles : PropTypes.array.isRequired,
        
    }
   
    
    componentDidMount(){
        this.props.getShipPosts();
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

         }, 1000); 

       
        
        
    }
    getName = (id,props) =>{
            
        for(var i = 0;i<this.props.profiles.length;i++){
            if(this.props.profiles[i].owner === id){
                return this.props.profiles[i].first_name   
         }
         
        }
        
           
       
        }
        getImg = (id,props) =>{
            
            for(var i = 0;i<this.props.profiles.length;i++){
                if(this.props.profiles[i].owner === id){
                    var img = document.querySelector(".profil-Img");
                    
                 
                    //img[j].style.backgroundImage = `url("http://127.0.0.1:8000${this.props.profiles[i].image_profile}")`
                    return this.props.profiles[i].image_profile
                
                   
                    
                    
            }
              
            }
                    
                       
                   
        }


    render() {
        return (
            <React.Fragment>
            <h2 className="title-Postes">SHIPPING POSTS</h2>
            <div className="CardAnnonce-body">
            {this.props.Posts
            .filter(Post =>{return Post.ville.toLowerCase().indexOf("CHEFCHAOUEN".toLowerCase()) >= 0})
            .map(Post =>(<div key={Post.id} className="Cardcontainer">
                <div className="profil-Img" style ={{backgroundImage : `url(${this.getImg(Post.owner)})` } }>
                </div>
                <div className="annonce-card">
                <div className="typeAnoonce">
                    <h4>{Post.service}</h4>
                    <hr/>
                    <h5>{this.getName(Post.owner)}</h5><br/>
                    <div className="text-card-annonce">
                    
                    <h5>Type Goods   : {Post.bagages} </h5><br/>
                    <h5>Phone Number : <strong>{Post.num_tele}</strong></h5>
                    </div>
                </div>
                <div className="cnt-timer">
                <div className="content-annonce-card timing">
                    <h6 className="departTime">{Post.date_depart}</h6>
                    <h6 className="departdate">{Post.date_depart}</h6>
                    <h6 className="ArrivalTime">{Post.date_arrive}</h6>
                </div>
                <div className="progress-Cardcontainer">
                    <div className="Cardprogress" id="progress"></div>
                    <div className="circles active">{Post.ville}</div>
                    <div className="circleFull"></div>
                    <div className="circles active">{Post.ville_distination}</div>
                </div>
                </div>
                <div className="content-annonce-card Remained">
                    <span className="RemainedPlaces"><i  className="fas fa-check"></i></span>
                    <h5>AVAILABLE</h5>
                    <span className="RemainedSpan"></span>
                    
                </div>
            </div>
                
            
            </div>
            ))}
                </div>
                </React.Fragment>
            )
    }
}
const mapStateToProps = state => ({
    Posts: state.CovoiturageReducer.annonces,
    profiles: state.UserReducer.Profiles,
        
    });

export default connect(mapStateToProps , {getShipPosts , getProfiles})(ShippingPosts);