import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getMyCovPosts,getMyCovPostsR,getMyCovoPost ,getMyCovrPost ,deleteCovrPost ,deleteCovoPost} from '../../actions/CovoiturageActions';
import {getProfile } from '../../actions/UserActions';
import {
    Route,
    Link
  } from "react-router-dom";

class MyCovPosts extends Component {
    
    static propTypes = {
        CovO : PropTypes.array.isRequired,
        CovR : PropTypes.array.isRequired,
        profile : PropTypes.object.isRequired,
        
    }
   
    
    componentDidMount(){
        this.props.getMyCovPosts();
        this.props.getMyCovPostsR();
        this.props.getProfile();
        
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

         }, 3000); 
       

    
    }
    getName = (props) =>{
                return this.props.profile.first_name  
        }
        getImg = (props) =>{
            
            
                
                    var img = document.querySelectorAll(".profil-Img");
                    
                   
                   for (var j=0 ; j < img.length; j++) {
                    img[j].style.backgroundImage = `url("${this.props.profile.image_profile}")`
                    
                }
                   
                    
                    
            
            
            
                    
                       
                   
        }
    


    render() {
        return (
            <React.Fragment>
            <h2 className="title-Postes">COVOITURAGE </h2>
            <div className="myPostsBody" >
            {this.props.CovO.map(Post =>(
                
                <div key={Post.id} className="Cardcontainer" onClick={this.props.getMyCovoPost.bind(this,Post.id)}>
                <div onClick={this.props.deleteCovoPost.bind(this,Post.id)}  className="remove-Posts" id="deletee">
                    <i class="fas fa-times"></i>
                </div>
                <div className="profil-Img" onLoad={this.getImg(this.props.profile)}>
                </div>
                <div className="annonce-card">
                <Link to="/leads/Covoiturage_Update">
                <div className="typeAnoonce">
                    <h4>Offer</h4>
                    <hr/>
                    <h5>{this.getName(this.props.profile)}</h5><br/>
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
                </Link>
            </div>
                
            
            </div>
            ))}
            {this.props.CovR.map(Post =>(
            
                <div key={Post.id} className="Cardcontainer" onClick={this.props.getMyCovrPost.bind(this,Post.id)}>
                <div onClick={this.props.deleteCovrPost.bind(this,Post.id)}  className="remove-Posts" id="deletee">
                    <i class="fas fa-times"></i>
                </div>
                <div className="profil-Img" onLoad={this.getImg(this.props.profile)}>
                </div>
                <div className="annonce-card">
                    <Link to="/leads/Covoiturage_Update">
                <div className="typeAnoonce">
                    <h4>Request</h4>
                    <hr/>
                    <h5>{this.getName(this.props.profile)}</h5><br/>
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
                    <span className="RemainedPlaces">{Post.num_personnes}</span>
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
    CovO: state.MyPostsReducer.CovPostsO,
    CovR: state.MyPostsReducer.CovPostsR,
    profile: state.UserReducer.profile,
    
});


export default React.memo(connect(mapStateToProps , {deleteCovrPost,deleteCovoPost,getMyCovPosts,getMyCovPostsR ,getProfile , getMyCovoPost ,getMyCovrPost})(MyCovPosts));