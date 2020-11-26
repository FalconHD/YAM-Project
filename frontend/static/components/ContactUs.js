import React, { Component } from 'react'
import ContactSvg from "../contact.svg";
export default class ContactUs extends Component {
    render() {
        return (
            <div className="ContaCtUS">
                 <section  className="ContaCtUS-section" >
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
                  
                </section>
            </div>
        )
    }
}
