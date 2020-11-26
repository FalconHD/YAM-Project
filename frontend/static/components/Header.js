import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YamLogo from '../yam logo.png';
import logo from '../logo.png';
import swal from '@sweetalert/with-react'

import { logout } from '../actions/auth';
import Logout from '../logout.png';

import {
  
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";


class Header extends React.Component{
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
      };
    
      render() {
        const { isAuthenticated, user } = this.props.auth;
        
        
        const authLinks = (
            <div className="profil-login">
              <span >
                Welcome 
                <i className="fas fa-user userLogo"></i>
                <span className="user-name">{user ? ` ${user.username}` : ''}</span>
                
              </span>
              
                <img onClick={this.props.logout} src={Logout}/>
                  
                
             
            </div>
          );
      
          const guestLinks = (
            <Link to="/registration">
              <button >
                
                  Sign In
                
              </button>
              </Link>
            
          );

    

        return(
          <div className="nav-top active" id="nav-top">
          <section className="nav-section1">
          <button className="icon" id="toggle">
              <div className="line line1"></div>
              <div className="line line2"></div>
          </button>
          <NavLink to='/'><img className="Yam-logo-nav" src={YamLogo}/></NavLink>
          </section>
          <section className="nav-top-links">

              <NavLink
               activeClassName="active"
              to='/'><button><i className="fas fa-home"></i>Home</button>
              </NavLink>

              <NavLink to='/leads/About-Team'><button><i className="fas fa-award"></i>About us</button></NavLink>
              <NavLink to='/leads/About-Team'><button><i className="fas fa-users"></i>Team</button></NavLink>

              <div className="search-nav">
                  <input type="search" name="search" placeholder="Search By City ..."/>
                  <button><i className="fas fa-search"></i></button>
              </div>
          </section>
          <section className="nav-top-profil">
          <div className="profil-login">
              {isAuthenticated ? authLinks : guestLinks}
          </div>
          </section>

      </div>
            

        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
  });


export default connect(mapStateToProps, { logout })(Header);
