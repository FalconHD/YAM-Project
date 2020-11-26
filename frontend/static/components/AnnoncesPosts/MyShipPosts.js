import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getMyShipPosts , getMyShipPost ,deleteShipPost} from '../../actions/CovoiturageActions';
import {getProfile } from '../../actions/UserActions';
import {
    Route,
    Link
  } from "react-router-dom";
class MyShipPosts extends Component {
    
    static propTypes = {
        ShipPosts: PropTypes.array.isRequired,
        profile : PropTypes.object.isRequired,
        
    }
   
    
    componentDidMount(){
        this.props.getMyShipPosts();
        
        this.props.getProfile();
       

    
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
            <h2 className="title-Postes">Shipping</h2>
            <div className="myPostsBody" >
            {this.props.ShipPosts.map(Post =>(
            
                <div key={Post.id} className="Cardcontainer" onClick={this.props.getMyShipPost.bind(this,Post.id)}>
                <div onClick={this.props.deleteShipPost.bind(this,Post.id)}  className="remove-Posts" id="deletee">
                    <i class="fas fa-times"></i>
                </div>
                <div className="profil-Img" onLoad={this.getImg(this.props.profile)}>
                </div>
                <div className="annonce-card">
                    <Link to="/leads/Shipping_Update" >
                <div className="typeAnoonce">
                    <h4>{Post.service}</h4>
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
                    <span className="RemainedPlaces"><i  className="fas fa-check"></i></span>
                    <h5>AVAILABLE</h5>
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
    ShipPosts: state.MyPostsReducer.ShipPosts,
   
    profile: state.UserReducer.profile,
    
});


export default React.memo(connect(mapStateToProps , {deleteShipPost,getMyShipPosts ,getProfile ,getMyShipPost})(MyShipPosts));