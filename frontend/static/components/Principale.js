import React, { Component ,Fragment} from 'react';


import Logout from '../logout.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    NavLink,
    Redirect
  } from "react-router-dom";
import { logout } from '../actions/auth';
import Covoiturage from './Covoiturage'
import Shipping from './Shipping'
import ContentSite from './ContentSite'
import Header from './Header'
import SideBar from './SideBar';
import tranImg from '../undraw1.svg'
import covImg from '../undraw2.svg'
import livImg from '../undraw3.svg'
 class Principale extends Component {
    state = {
        val :""
    }


    componentDidMount(){
        const toggle = document.getElementById('toggle');
        const nav = document.getElementById('nav');
        const nav_top=document.getElementById('nav-top')
        const sidebarContainer=document.getElementById('sidebarContainer')
        const contentSite=document.getElementById('contentSite')
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            nav_top.classList.toggle('active');
            sidebarContainer.classList.toggle('active')
            contentSite.classList.toggle('active')
        });

        
    }


    
    

  
    
 
 

    render() {
        
        
        
         

        return (
            <Fragment>
               
                    <div className="body-allPages">
                    
                        <div  className="header-container">
                        <Header/>
                        </div>
                        <div className="bg-modal-choose">
        
                            <div className="content-choose">
                            
                                <div className='close closeModal'>+</div>
                                <Link to="/leads/Covoiturage_Add">
                                <div className="closeTab closeModal">
                                <span><img src={covImg}/></span> 
                                    <a>covoiturage</a>
                                    
                                </div>
                                </Link>
                                <Link to="/leads/Transport_Add">
                                <div className="closeTab closeModal">
                                <span><img src={tranImg}/></span> 
                                    <a>Transport</a>
                                    
                                </div >
                                </Link>
                                <Link to="/leads/livraison_Add">
                                <div className="closeTab closeModal">
                                    <span><img src={livImg}/></span>
                                    <a>Shipping</a>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>
                        <div className="add-annonce-btn" id='Add-An'>
                                <i className="fas fa-plus-circle"></i>        
                        </div>
                
                        <dir className="allPages">
                            <div id="sidebarContainer"className="sidebar-container">
                            <SideBar />
                            </div>
                            <div id="contentSite" className="contentSite"> 
                                <ContentSite/>
                            </div>

                            
                        </dir>

                    </div>
                    
                    
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });

  export default React.memo(connect(mapStateToProps, { logout })(Principale));