import React, { Component ,Fragment } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {  getProfile  } from '../actions/UserActions'
import { Link, Redirect } from 'react-router-dom';
import MyCovPosts from './AnnoncesPosts/MyCovPosts'
import MyShipPosts from './AnnoncesPosts/MyShipPosts';
import MyTransPosts from './AnnoncesPosts/MyTransPosts';
import profilImagess from '../my_documents.svg'

 class Profile extends Component {
     state = {
         isTrue : true,
         isAuthenticated : false,
         profLoaded : true,
         
     }



     static propTypes = {
        
        getProfile:PropTypes.func.isRequired,
        
        
    };
    

        
       
getImages = (image) =>{
    console.log(image);
    
}
    
     componentDidMount(){
        
        this.props.getProfile();
        
        
      
       
          
        

        

        const InfoBro = document.getElementById('infooos');
        const PostsBro = document.getElementById('Postssss');
        const cover = document.getElementById('cover');
        const ProfilImg = document.getElementById('profilImage');
        
        
  
        InfoBro.addEventListener('click', () => {
          InfoBro.classList.add('acctive');
          PostsBro.classList.remove('acctive');
          cover.classList.remove('acctive');
          ProfilImg.classList.remove('acctive');
          this.setState({isTrue : true})
            
        });
        PostsBro.addEventListener('click', () => {
          PostsBro.classList.add('acctive');
          cover.classList.add('acctive');
          ProfilImg.classList.add('acctive');
          InfoBro.classList.remove('acctive');
          this.setState({isTrue : false})
     })
     
     
    
    }
     getImg = (Prof) =>{
            
        setTimeout(function(){
            const ProfilImg = document.getElementById('profilImage');
            const cover = document.getElementById('cover');
            cover.style.backgroundImage = `url("${Prof.Cover}")`
            ProfilImg.style.backgroundImage = `url("${Prof.image_profile}")`
         },1000)
           
    }
  
    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.profile !== this.props.profile) {
          this.state.profile = nextProps.profile
     }
      }
      
    render() {
        
       
        const { isAuthenticated, user } = this.props.auth;
        
        const Prof = this.state.profile;
       
         const Profil__Info = (
            
             <section class="profile-info">
            
            <div class="profilInfo">
                
                <div class="ic text-center social-media-profil">
                        <div><a href="#"><i class="fab fa-facebook-f"></i></a></div>
                        <div><a href="#"><i class="fab fa-twitter"></i></a></div>
                        <div><a href="#"><i class="fab fa-instagram"></i></a></div>
                        <div><a href="#"><i class="fab fa-youtube"></i></a></div>
                        <div><a href="#"><i class="fab fa-google-plus-g"></i></a></div>
                </div>
                
                <div class="usernameProfil">
                    <i class="fas fa-star"></i>
                <div>{user ? ` ${user.username|| ""}` : ''}</div>
                    <i class="fas fa-star"></i> 
                </div>
                <div className="centerProfile">
                <table>
                    <tr>
                        <td class="colorIt">FIRST NAME :</td>
                        <td class="NotColor">{Prof ? ` ${Prof.first_name}` : ''}</td>
                        <td class="colorIt">NATION :</td>
                        <td class="NotColor">{Prof ? ` ${Prof.Nation}` : ''}</td>
                        
                    </tr>
                    <tr>
                        <td class="colorIt">LAST NAME :</td>
                        <td class="NotColor">{Prof ? ` ${Prof.last_name}` : ''}</td>
                        <td class="colorIt">CITY :</td>
                        <td class="NotColor">{Prof ? ` ${Prof.City}` : ''}</td>
                        
                    </tr>
                    <tr>
                        <td class="colorIt">CIN :</td>
                        <td class="NotColor">{Prof ? ` ${Prof.CIN}` : ''}</td>
                        <td class="colorIt">DESCRIPTION :</td>
                        <td class="NotColor">{Prof ? ` ${Prof.Description}` : ''}</td>

                    </tr>
                </table>
                <div className="ImageProfile">
                    <img src={profilImagess}/>
                </div>
                </div>
                {this.props.profile?<Link to='/leads/modifyMyProfil'><button className="profileButton">update profile</button></Link>: <Link to="/leads/AddMyProfil" ><button className="profileButton">Add profile</button></Link>}
            </div>
            
            
        </section> 
        ) 
        const ProfilPosts = (
            <div className="all_My_Posts">
                <div className="seccc"><MyCovPosts/></div>
                <div className="seccc"><MyShipPosts/></div>
                <div className="seccc"><MyTransPosts/></div>
            </div>
            
        )
       
        
        
        return (
            
            <div class="Profil-body">
                { !isAuthenticated ? <Redirect to='/registration'/> : ''}
                 
                <section id="cover" class="cover-img" >
                {this.getImg(Prof)}
                    <div></div>
                    <div></div>
                    <div id="profilImage" class="profilImage"></div>

                    
                </section>
                { this.state.isTrue ? Profil__Info : ProfilPosts}
                
                <div class="buttons-footer">
                        <a id="infooos" className="acctive">My infos</a>
                        <a id="Postssss">My Posts</a>
                    </div>
	

                                
</div>
        )
    }
}


const mapStateToProps = state => ({
    profile: state.UserReducer.profile,
    auth: state.auth,
  });

export default React.memo(connect(mapStateToProps ,{getProfile })(Profile));
