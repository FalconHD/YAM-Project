import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getMyTransPosts ,deleteTransPost ,getMyTransPost} from '../../actions/CovoiturageActions';
import {getProfile } from '../../actions/UserActions';
import swal from 'sweetalert';
import {
    Route,
    Link
  } from "react-router-dom";

class MyTransPosts extends Component {
    
    static propTypes = {
        TransPosts : PropTypes.array.isRequired,
        profile : PropTypes.object.isRequired,
        
    }
   
    
    componentDidMount(){
       
            this.props.getMyTransPosts();
        
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
            <h2 className="title-Postes">Transport</h2>
            <div className="myPostsBody" >
            {this.props.TransPosts.map(Post =>(
                
                <div key={Post.id} className="Cardcontainer" onClick={this.props.getMyTransPost.bind(this,Post.id)} >
                <div onClick={this.props.deleteTransPost.bind(this,Post.id)}  className="remove-Posts" id="deletee">
                    <i class="fas fa-times"></i>
                </div>
                <div className="profil-Img" onLoad={this.getImg(this.props.profile)}>
                </div>
                
                <div className="annonce-card">
                <Link to="/leads/Transport_Update">
                <div className="typeAnoonce">
                    <h4>TRANSPORT </h4>
                    <hr/>
                    <h5>
                    
                    {this.getName(this.props.profile)}
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
                <div className="content-annonce-card Remained updates">
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
    TransPosts: state.MyPostsReducer.TransPosts,
    
    profile: state.UserReducer.profile,
    
});


export default React.memo(connect(mapStateToProps , {getMyTransPosts,getProfile,deleteTransPost,getMyTransPost})(MyTransPosts));