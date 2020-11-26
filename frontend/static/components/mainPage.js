import React, { Component } from 'react'
import mainImg from '../9oae.svg'
import transport from '../undraw1.svg'
import covoiturage from '../undraw2.svg'
import livraison from '../undraw3.svg'
import Cloud from '../hero-4.png'
import TeamSvg from "../team1.svg";
import ContactSvg from "../contact.svg";
import logoMember from '../interface.svg'
import { Link as Lin, animateScroll as scroll } from "react-scroll";
import {Animated} from "react-animated-css";
import { Link , Redirect } from 'react-router-dom';
import YLOGO from "../yam logo.png";



export class mainPage extends Component {
     state = {
        hovred:true,
        isHome:true,
        service:false,

    }
    isHome = e => {
        this.setState({
            isHome:true,
        })
        console.log(this.isHome)
    }
    notHome = e => {
        this.setState({
            isHome:false,
            
            service:true
        })
        
       
        
    }

    scrollToTop = () => {
        scroll.scrollToTop(scroll.smooth=true); 
        this.setState({
            ishome:true,
            hovred:true,
        })
    };
    onMouseEnter = e => {
        this.setState({
            hovred:true,
        })
        if(!this.state.isHome){
            const demoClasses = document.querySelector('.main-navbar');
            demoClasses.style.background= "#4F190E";
            demoClasses.style.transition = "all 0.8s linear 0s";
            
        }
        
    }
    onMouseLeave = e => {
        if(!this.state.isHome){
            this.setState({
                hovred:false,
            })
            
        }
        const demoClasses = document.querySelector('.main-navbar');
        demoClasses.style.background= "none";
        demoClasses.style.transition = "all 0.1s linear 0s";
    }
    

   
    
    render() {
      
        
        return (
            <div className="mainbody">
                <div className="main-page-container">
                
                <nav  onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="main-navbar" >
               
                    <div className="nav-section sec1">
                    <Animated className='sec1' animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={800} animationOutDuration={1000} isVisible={this.state.hovred}>
                    <Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="home"><img  onClick={this.isHome}  src={YLOGO}></img></Lin>
                    </Animated>
                    </div>
                    
                    
                    <div className="nav-section sec2">
                    <Animated animationIn="slideInDown" animationOut="slideOutUp" animationInDuration={800} animationOutDuration={1000} isVisible={this.state.hovred}>
                            <Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="home"><button onClick={this.isHome} className="nav-buttons">Home</button ></Lin>
                            <Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="service"><button  onClick={this.notHome} className="nav-buttons" >Service</button ></Lin>
                            <Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="about"><button  onClick={this.notHome} className="nav-buttons">About</button ></Lin>
                            <Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="contact"><button  onClick={this.notHome} className="nav-buttons" >Contact</button></Lin>
                            </Animated>
                    </div> 
                    
                
                </nav>
                
                <section  className="mains-sections" id="home">
                <div className="main-Order">
                    <div className="main-order1">
                    <section className="home-section ">
                    <div className="start-section">
                        <h1>GET LIFE EASIER <br/>WITH YAM</h1>
                        <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt 
                        </p>
                        <Animated animationIn="tada" isVisible={true}><Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="service"><button className="mainButton " onClick={this.notHome}>GET STARTED</button></Lin></Animated>
                            
                    </div>
                
                    
                    </section>
                    <section className="home-section svg-section">
                    <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}><img className ="svgimg " src={mainImg} /></Animated>
                
                    
                    </section>
                    </div>
                    <div className="main-order2">
                        <img className="Cloud"src={Cloud}></img>
                    </div>
                </div>
                
                
                </section>
                    <section className="mains-sections" id="service">
                    <h1>All!! in one Place</h1>
                    <h2>NOW! EVERY THINK IN YOUR HAND</h2>
                    <p className="loren">high Quality services that makes life more easier and sheap</p>
                    <div className="services-container">
                        
                        <section className="service service-1">
                        
                            <Animated className="service-info-card" animationIn="rubberBand"  animationInDuration={1200}  isVisible={this.state.service}>
                        
                            <div>
                                
                                <span><img src={covoiturage}></img></span>
                                </div>
                            <h3 >Covoiturage</h3>
                            <p > <strong>Covoiturage</strong> is a service<br/> where you can ... !!!</p>
                            <Link to='/leads/CovCity'><i className="fas fa-angle-double-down"></i></Link>
                            </Animated>
                            
                        </section>
                        
                        
                        <section className="service service-2">
                        
                             <Animated className="service-info-card" animationIn="rubberBand"  animationInDuration={1200}  isVisible={this.state.service}>
                        
                            <div><span><img src={livraison}></img></span></div>
                            <h3>Livraison</h3>
                            <p> <strong>Livraison</strong> is a service<br/> where you can ... !!!</p>
                            <Link to='/leads/ShipCity'><i className="fas fa-angle-double-down"></i></Link>
                            </Animated>
                            
                        </section>
                        
                        
                         <section className="service service-3">
                         
                            <Animated className="service-info-card" animationIn="rubberBand"  animationInDuration={1200}  isVisible={this.state.service}>
                        
                            <div><span><img src={transport}></img></span></div>
                            <h3>Transport</h3>
                            <p><strong>Transport</strong> is a service<br/> where you can ... !!!</p>
                            <Link to='/leads/TransCity'><i className="fas fa-angle-double-down"></i></Link>
                            </Animated>
                            
                        </section>
                        
                    </div>
                </section>
                <section  className="mains-sections" id="about">
                        <div className="about-title">
                        <h1>About Our Team</h1>
                        <p>You Can visit Our Social Media For more Info</p>
                        </div>
                        <div className="team-display">
                            <section className="team-card">
                                <section className="team-container">
                                    <div className=" team team-1">
                                        <div className="team-first">
                                            <img src={logoMember} />
                                        <div className="info-team">
                                            <h3>Name : Youssef EL Bakkouri</h3>
                                            <h6>Job : Developper</h6>
                                        </div>
                                        </div>
                                        <div className="social-team">
                                                <a className="rga" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                                <a className="rga" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                                <a className="rga" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                    <div className="team team-2">
                                        <div className="team-first"> 
                                        <img src={logoMember} />    
                                        <div className="info-team">
                                            <h3>Name : Manal </h3>
                                            <h6>Job : Site Manager</h6>
                                        </div>
                                        </div>
                                        <div className="social-team">
                                            <a className="rga" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                            <a className="rga" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                            <a className="rga" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                        
                                    </div>
                                    <div className="team team-3">
                                        <div className="team-first">
                                             <img src={logoMember} />
                                        <div className="info-team">
                                            <h3>Name : Akram Zahry</h3>
                                            <h6>Job : Marketing Develloper</h6>
                                        </div>
                                        </div>
                                        <div className="social-team">
                                                <a className="rga" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                                <a className="rga" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                                <a className="rga" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                                            
                                        </div>
                                        
                                    </div>
                                </section>
                            </section>


                            <section className="svgimg-about">
                                <img src={TeamSvg}/>
                            </section>
                            
                        </div>
                        
                    </section>
                
                <section  className="mains-sections" id="contact">
                    <section className="form-Contact">
                        <section className="  form-container">
                        
                        <form  className="rgform" >
                            <h1 className="rgh1">Contact Us</h1>
                            <div className="rgsocial-container maina">
                                <a className="rga" href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a className="rga" href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a className="rga" href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span className="rgspan">Send Us a Message</span>
                            <input className="rginput" name ='username'   type="text" placeholder="Name" />
                            <input className="rginput"  name ='password'   type="textarea" placeholder="message" />
                            <button className="rgbutton"> Send </button>
                        </form>

                        </section>


                        <section className="Contact-svg">
                            <img className="svg-Contact" src={ContactSvg}></img>

                        </section>

                    </section>
                    <section className="main-footer-section">
                                <div className="logo-footer " >
                                <Lin activeClass="active" spy={true} smooth={true} offset={0} duration= {800} to="home"><img onClick={this.scrollToTop}   src={YLOGO}></img></Lin>
                                </div>
                                <div className="textfooter">
                                    <h6>Copyright ©2020 Designed by <span>YAM</span> All Rights Reserved </h6>
                                </div>
                                <div className="ic text-center ">
                                <div><a href="#"><i className="fab fa-facebook-f"></i></a></div>
                                <div><a href="#"><i className="fab fa-twitter"></i></a></div>
                                <div><a href="#"><i className="fab fa-instagram"></i></a></div>
                                <div><a href="#"><i className="fab fa-youtube"></i></a></div>
                                <div><a href="#"><i className="fab fa-google-plus-g"></i></a></div>
                                
                               
                                </div>
                                
                             
                    </section>
                </section>
                </div>
                

                
                </div>
        
        )
        
    }
}

export default mainPage
