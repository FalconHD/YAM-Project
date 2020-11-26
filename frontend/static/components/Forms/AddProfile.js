
import React, { Component } from 'react';
import axios from 'axios';
import {updateProfile , addProfile} from '../../actions/UserActions'
import {connect} from 'react-redux';
import {  getProfile  } from '../../actions/UserActions'
import { Link, Redirect } from 'react-router-dom';


class AddProfile extends Component {

  state = {
    first_name: '',
    last_name: '',
    City: '',
    Nation: '',
    Description: '',
    CIN: '',
    Cover : null,
    image_profile: null,
    submitted : false
  };
  componentDidMount(){
    this.props.getProfile();
    
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImagePChange = (e) => {
    this.setState({
        image_profile: e.target.files[0]
    })
  };
  handleImageCChange = (e) => {
    this.setState({
        Cover: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const {first_name,
    last_name,
    City,
    Nation,
    Description,
    CIN,
    image_profile,
    Cover} = this.state;
    const data = {first_name,
        last_name,
        City,
        Nation,
        Description,
        CIN,
        image_profile,
        Cover};
    this.props.addProfile(data);
    this.setState({
        submitted: true,
      })
    
     
   
    
  };
  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.profile !== this.props.profile) {
      this.state = nextProps.profile
 }
  }

  render() {
    if (this.state.submitted){
        return <Redirect
            to="/leads/CovCity"
           
            />;
    }
     
    return (
    
     
        <div className="updatecontent">
            <h2 className='h1-update-info'>Add my Profile Info</h2>
            <input className="rginput" type="first_name" placeholder='first_name' id='first_name' value={this.state.first_name|| ''} onChange={this.handleChange} required/>
            <input className="rginput" type="last_name" placeholder='last_name' id='last_name' value={this.state.last_name} onChange={this.handleChange} required />
            <input className="rginput" type="Nation" placeholder='Nation' id='Nation' value={this.state.Nation} onChange={this.handleChange} required/>
            <input className="rginput" type="City" placeholder='City' id='City' value={this.state.City} onChange={this.handleChange} required />
            <input className="rginput" type="Description" placeholder='Description' id='Description' value={this.state.Description} onChange={this.handleChange} required/>
            <input className="rginput" type="CIN" placeholder='CIN' id='CIN' value={this.state.CIN} onChange={this.handleChange} required />
            <div className="image-upload">
              <div>
                <span>Upload your Profile Image :</span>
                <input type="file" id="image_profile" accept="image/png, image/jpeg"  onChange={this.handleImagePChange} required/>
              </div>
              <div>
                <span>Upload your Cover Image :</span>
                <input type="file" id="Cover" accept="image/png, image/jpeg"  onChange={this.handleImageCChange} required/>
              </div>
            
            </div>
            <button className="Profil-Update-Button" onClick={this.handleSubmit}>Add Now</button>
            
       </div>
      
    );
  }
}


const mapStateToProps = state => ({
    profile: state.UserReducer.profile,
    
  });

export default connect(mapStateToProps,{getProfile ,addProfile})(AddProfile);
