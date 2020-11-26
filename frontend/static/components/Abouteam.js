import React, { Component } from 'react'
import man1 from "../034-man.svg"
import man2 from  "../008-man.svg"
import women from  "../071-woman.svg"
import soft from  "../software_engineer.svg"
import teamwork from  "../team_work.svg"

class Abouteam extends Component {
    render() {
        return (
            <div className="abboutUs">
                <div className="about-section">
                    
                    <img src={teamwork}/>
                    <div>
                        <h1>About Us</h1>
                        <p>Group Of MI-S6</p>
                        <p>We are About To Make A good Project For Our PFE</p>
                    </div>
                    <img className="imgg" src={soft}/>
                </div>

                <h2 >Our Team</h2>
                <div className="row">
                <div className="column">
                    <div className="card">
                    <img src={man2} />
                    <div className="Cardd-container">
                        <h2>Youssef El Bakkouri</h2>
                        <p className="title">Developer</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>Youssef@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img src={women} />
                    <div className="Cardd-container">
                        <h2>Manal</h2>
                        <p className="title">Site Manager</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>Manal@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                    <img src={man1} />
                    <div className="Cardd-container">
                        <h2>Akram Zahry</h2>
                        <p className="title">Marketing</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>Akram@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}


export default Abouteam;