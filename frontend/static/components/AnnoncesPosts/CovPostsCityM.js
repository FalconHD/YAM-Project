import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getCovPostsOo ,getCovPostsRr } from '../../actions/CovoiturageActions';
import {getProfiles } from '../../actions/UserActions';

class CovoituragePostsO extends Component {
    
    static propTypes = {
        PostsR: PropTypes.array.isRequired,
        PostsO: PropTypes.array.isRequired,
        profiles : PropTypes.array.isRequired,
        
    }
   
    
    componentDidMount(){
        this.props.getCovPostsRr();
        this.props.getCovPostsOo();
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
                return this.props.profiles[i].first_name   
         }
         
        }
        
           
       
        }
        getImg = (id,props,image) =>{
            
            for(var i = 0;i<this.props.profiles.length;i++){
                if(this.props.profiles[i].owner === id){
                    var img = document.querySelector(".profil-Img");
                    console.log(id)
                    image = this.props.profiles[i].image_profile
                  
                    //img.style.backgroundImage = `url("http://127.0.0.1:8000${this.props.profiles[i].image_profile}")`
                    
                return this.props.profiles[i].image_profile
                   
                    
                    
            }
              
            }
                  
                       
                   
        }
    


    render() {
        const image = '';
        return (
            <React.Fragment>
            <div>
            <h2 className="title-Postes">COVOITURAGE OFFERS</h2>
            <div className="CardAnnonce-body" >
            {this.props.PostsO
                .filter(Post =>{return Post.ville.toLowerCase().indexOf("MARRAKECH".toLowerCase()) >= 0})
                .map(Post =>(<div key={Post.id} className="Cardcontainer">
                <div className="profil-Img" style ={{backgroundImage : `url(${this.getImg(Post.owner)})` } } >
                    
                
                </div>
                <h2></h2>
                <div className="annonce-card">
                <div className="typeAnoonce">
                    <h4>OFFER</h4>
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
                    <span className="RemainedPlaces">{Post.num_places}</span>
                    <h5>REMAINED </h5>
                    <span className="RemainedSpan"></span>
                    
                </div>
            </div>
            </div>
            ))}
            </div>
            </div>
            <div>
            <h2 className="title-Postes">COVOITURAGE REQUESTS</h2>
            <div className="CardAnnonce-body" >
            {this.props.PostsR
                .filter(Post =>{return Post.ville.toLowerCase().indexOf("MARRAKECH".toLowerCase()) >= 0})
                .map(Post =>(<div key={Post.id} className="Cardcontainer">
                <div className="profil-Img" style ={{backgroundImage : `url(${this.getImg(Post.owner)})` } }>
                </div>
                <div className="annonce-card">
                <div className="typeAnoonce">
                    <h4>REQUEST</h4>
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
                    <span className="RemainedPlaces">{Post.num_places}</span>
                    <h5>REMAINED </h5>
                    <span className="RemainedSpan"></span>
                    
                </div>
            </div>
            </div>
            ))}
            </div>
            </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    PostsR: state.CovoiturageReducer.annoncesCity,
    PostsO: state.CovoiturageReducer.annoncesCity2,
    profiles: state.UserReducer.Profiles,
    
});


export default connect(mapStateToProps , {getCovPostsOo ,getProfiles ,getCovPostsRr})(CovoituragePostsO);