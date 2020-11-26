import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {  Add_Dannonce } from '../../../actions/CovoiturageActions'
import {  getProfile } from '../../../actions/UserActions'

export class ConfirmD extends Component {


  static propTypes = {
    Add_Dannonce:PropTypes.func.isRequired,
    getProfile:PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired
    
};
onSubmit = e => {
  e.preventDefault();
  const  { lieu_depart, lieu_arrive, date_depart, date_arrive, num_tele ,ville,bagages,comment,ville_distination,num_personnes,car_model}= this.props.values;
  const Dannonce =  { lieu_depart, lieu_arrive, date_depart, date_arrive, num_tele ,ville,bagages,comment,ville_distination,num_personnes,car_model};
  this.props.Add_Dannonce(Dannonce);
  swal("Done!", "Annonce Added", "success");
};

componentDidMount(){
  this.props.getProfile();
  console.log(this.props.profile)
}
  
  render() {
    const {
      values: { lieu_depart, lieu_arrive, date_depart, date_arrive, is_accepted, num_tele ,ville,bagages,comment,ville_distination,num_personnes,car_model}
    } = this.props;
    return (
              
      <div className="ConfirmWithSub">
            <div className="resualt-list">
              
              <div className="infoSubmition userinfo">
              <div><h6>UserName : </h6><span>{this.props.profile.first_name}</span></div>
              <div><h6>LastName : </h6><span>{this.props.profile.last_name}</span></div>
              <div><h6>CIN : </h6><span>{this.props.profile.CIN}</span></div>
                
              
                <div><h6>From :</h6><span>{lieu_depart}</span></div>
                <div><h6>To :</h6><span>{lieu_arrive}</span></div>
                <div><h6>Going Date :</h6><span>{date_depart}</span></div>
                <div><h6>Arrival Date :</h6><span>{date_arrive}</span></div>
                <div><h6>Number Of Persons :</h6><span>{num_personnes}</span></div>
               <div><h6>Car Model :</h6><span>{car_model}</span></div>
          
            
              
              <div><h6>Phone Number</h6><span>{num_tele}</span></div>
              <div><h6>City</h6><span>{ville}</span></div>
              <div><h6>Goods Type</h6><span>{bagages}</span></div>
              <div><h6>Comment</h6><span>{comment}</span></div>
              <div><h6>Destination City"</h6><span>{ville_distination}</span></div>
              
            </div>
            </div>
            <div>
            <button className="bt"  onClick={this.onSubmit}>Submit</button>
            </div>
            </div>
            

          
      
    
    );
  }
}


const mapStateToProps = state => ({
  profile: state.UserReducer.profile,
  
  
});

export default connect(mapStateToProps ,{getProfile , Add_Dannonce})(ConfirmD);
