import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getTransPosts ,getCovPost } from '../../actions/CovoiturageActions';
import {getProfiles } from '../../actions/UserActions';
import { Link } from 'react-router-dom'
class TransportPosts extends Component {
    static propTypes = {
        Posts: PropTypes.array.isRequired,
        profiles : PropTypes.array.isRequired,
        
    }
   
    
    componentDidMount(){
        this.props.getTransPosts();
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
            <h2 className="title-Postes">Transport Posts</h2>
            <div className="CardAnnonce-body">
            {this.props.Posts.map(Post =>(<div key={Post.id} className="Cardcontainer" onClick={this.props.getCovPost.bind(this,Post.id)}>
                <div className="profil-Img"  style ={{backgroundImage : `url(${this.getImg(Post.owner)})` } }>
                    
                </div>
                <div className="annonce-card">
                <Link to="/leads/Details">
                <div className="typeAnoonce">
                    <h4>TRANSPORT </h4>
                    <hr/>
                    <h5>
                    
                    {this.getName(Post.owner)}
                    </h5><br/>
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
                    <div className="circles active TransportTraget">{Post.lieu}</div>
                    <div className="circleFull"></div>
                    <div className="circles active TransportTraget">{Post.distination}</div>
                </div>
                </div>
                <div className="content-annonce-card Remained">
                    <span className="RemainedPlaces">{Post.num_places}</span>
                    <h5>REMAINED </h5>
                    <span className="RemainedSpan"></span>
                    
                </div>
                </Link>
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


export default connect(mapStateToProps , {getTransPosts ,getProfiles ,getCovPost})(TransportPosts);