import React, { Component, Fragment } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './ConfirmD';
import Success from './Success';
import CovoiturageAdd from './CovoiturageAdd'
import CovoiturageDemonde from './CovoiturageDemonde'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class UpdateMyTransPost extends Component {
    state = {
        step: 1,
        isActive : true,
        text : "Offer",
        cer : true,
        Post: {}
      };
    
      // Proceed to next step
      nextStep = () => {
        const { step } = this.state;
        
        this.setState({
          step: step + 1
        });
        if(this.state.step == 3){
          this.setState({
            cer: false
          });
        }
      };
    
      // Go back to prev step
      prevStep= () => {
        const { step } = this.state;
        
        this.setState({
          step: step - 1
        });
        if(this.state.step < 3){
          this.setState({
            cer: true
          });
        }
      };
     
    
      // Handle fields change
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
      componentDidMount(){
       

    
        const progress = document.getElementById('progress');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const circles = document.querySelectorAll('.circle');
    
        let currentActive = 1;
        prev.disabled = true;
        console.log(currentActive)
        prev.addEventListener('click', () => {
            currentActive--;
            
            
            
            // keep it withing boundaries
            if(currentActive < 1) {
                currentActive = 1;
            }
            
            update();
            this.prevStep()
        });
    
        next.addEventListener('click', () => {
            currentActive++;
            
            
            // keep it withing boundaries
            if(currentActive > circles.length) {
                currentActive = circles.length;
            }
            
            update();
            this.nextStep()
        });
    
        function update() {
            // set and remove active class dependent of the currentActive index
            circles.forEach((circle, idx) => {
                if(idx < currentActive) {
                    circle.classList.add('live');
                } else {
                    circle.classList.remove('live');
                }
            });
            
            // get all the 'active' circles
            const lives = document.querySelectorAll('.live');
            
            // get the % width for the progress bar
            // remove one from actives and circles in order to have steps like: 0%, 50%, 100%
            
            progress.style.width = `${((lives.length - 1) / (circles.length - 1)) * 100}%`;
            
            if(currentActive === 1) {
                // hide prev
                prev.disabled = true;
            } else if (currentActive === circles.length - 1 ) {
                // hide next
                prev.disabled = false;
                next.disabled = true;
            } else {
                // show prev and next
                prev.disabled = false;
                next.disabled = false;
            }
            
            
        }
    }
    
    Offre = (state) =>{
      this.setState({
        isActive : true,
        text: "Offer"
      })
    
    }
    Demande= (state) =>{
      this.setState({
        isActive : false,
        text: "Request"
      })
    }
      render() {
            return(
              <Fragment>
               
          
               
          <section class="steps-body">
                
          <div class="progress-container">
              <div class="progress" id="progress"></div>
              <div class="circle live">1</div>
              <div class="circle">2</div>
              <div class="circle">3</div>
              <div class="circle">4</div>
              
          </div>
          <div className='FormAdd'>
                
                <h4>Updating My <span>{this.props.UpdatePost.service} </span> Post</h4>
                <hr/>
          {this.state.isActive ? <CovoiturageAdd Post={this.props.UpdatePost} Profile = {this.props.profile}
          step={this.state.step} isActive={this.state.isActive}/> :  <CovoiturageDemonde step={this.state.step} isActive={this.state.isActive} Post={this.props.UpdatePost} Profile = {this.props.profile}/> }
          </div>
          <div>
            <button className="bt" id="prev" >Prev</button>
            <button className="bt" id="next" >Next</button>
          </div>
          </section>
            <div className="backk">
              <Link to="/leads/profil">
                <a><i class="fas fa-arrow-circle-left"></i></a>

              </Link>
            
            </div>
              </Fragment>
            )
        }
     
    }
    
    const mapStateToProps = state => ({
      UpdatePost: state.MyPostsReducer.Post,
      profile: state.UserReducer.profile,
      
    });



export default connect(mapStateToProps,{})(UpdateMyTransPost)