import React, { Component } from 'react'
import PostsImg from '../Posts.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    NavLink
  } from "react-router-dom";

class SideBar extends Component {
    
    subMenuActive = () =>{
        const Active = document.getElementById('sub');
        Active.style.display = "flex";

    }
    subMenuNone = () =>{
        const Active = document.getElementById('sub');
        Active.style.display = "none";

    }



    render() {
        return (
            <div className=" sidebar active" id="nav">

                        <section>
                            <h5>SERVICES</h5>
                            <div>
                                <i className="fas fa-car"></i>
                                <Link to="/leads/CovCity" ><a>COVOITURAGE</a></Link>
                            </div>
                            <div>
                                <i className="fas fa-shipping-fast"></i>
                                <Link to="/leads/ShipCity" ><a>SHIPPING</a></Link>
                            </div>
                            <div>
                                <i className="fas fa-taxi"></i>
                                <Link to="/leads/TransCity" ><a>TRANSPORT</a></Link>
                            </div>
                            
                        </section>
                        <section className="subMenuParent">
                            <h5> POSTS</h5>
                            <div onMouseOver={this.subMenuActive} onMouseLeave={this.subMenuNone}  >
                                <img className="Posts-img" src={PostsImg} />
                                <a>COVOITURAGE POSTS</a>
                                
                            </div>
                            <section onMouseOver={this.subMenuActive} onMouseLeave={this.subMenuNone} id='sub' className="sub-menu">
                                <div>
                                <Link to='/leads/Covoiturage_Offers'><a>Offers</a></Link>
                                </div>
                                    <div>
                                    <Link to='/leads/Covoiturage_Requests'><a>Requests</a></Link>
                                    </div>
                            </section>
                            
                            <div >
                            
                                <img className="Posts-img" src={PostsImg}/>
                                <Link to='/leads/Shipping_Posts'><a>SHIPPING POSTS</a></Link>
                                
                            </div>
                            
                            <div>
                                <img className="Posts-img" src={PostsImg}/>
                                <Link to='/leads/Transport_Posts'><a>TRANSPORT POSTS</a></Link>
                            </div>
                            
                        </section>
                        <section >
                            <h5>QUICK JOIN</h5>
                            
                            <div>
                                <i className="fas fa-user-circle"></i>
                                <Link to='/leads/profil'><a>MY PROFIL</a></Link>
                            </div>
                            <div>
                                <i className="fas fa-bell"></i>
                                <a>NOTIFICATIONS</a>
                                <span className="notification">5</span>
                            </div>
                            <div>
                                <i className="fab fa-teamspeak"></i>
                                <Link to='/leads/ContactUS'><a>CONTACT US</a></Link>
                            </div>
                        </section>
                        <section className="copyrights-all">
                            <h6>Copyright ©2020 Designed by <span>YAM</span></h6>
                            <h6>All Rights Reserved </h6>
                        </section>
                        
                    </div>
                    
        )
    }
}


export default React.memo(SideBar)