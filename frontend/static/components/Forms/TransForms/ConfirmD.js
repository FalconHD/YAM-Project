import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {  Add_Tannonce } from '../../../actions/CovoiturageActions'
import {  getProfile } from '../../../actions/UserActions'

export class ConfirmD extends Component {


  static propTypes = {
    Add_Tannonce:PropTypes.func.isRequired,
    getProfile:PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired
    
};
onSubmit = e => {
  e.preventDefault();
  const  { lieu_depart, lieu_arrive, date_depart, date_arrive, num_tele ,ville,bagages,comment,lieu,distination,num_places}= this.props.values;
  const Dannonce =  { lieu_depart, lieu_arrive, date_depart, date_arrive, num_tele ,ville,bagages,comment,lieu,distination,num_places};
  this.props.Add_Tannonce(Dannonce);
  swal("Done!", "Annonce Added", "success");
};

componentDidMount(){
  this.props.getProfile();
  console.log(this.props.profile)
}
  
  render() {
    const {
      values: { lieu_depart, lieu_arrive, date_depart, date_arrive, num_tele ,ville,bagages,comment,lieu,distination,num_places}
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
                
               
          
            
              
              <div><h6>Phone Number</h6><span>{num_tele}</span></div>
              <div><h6>City</h6><span>{ville}</span></div>
              <div><h6>Goods Type</h6><span>{bagages}</span></div>
              <div><h6>Comment</h6><span>{comment}</span></div>
              <div><h6>Number of Places"</h6><span>{num_places}</span></div>
              <div><h6>Exact Place"</h6><span>{lieu}</span></div>
              <div><h6>Destination"</h6><span>{distination}</span></div>
              
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

export default connect(mapStateToProps ,{getProfile , Add_Tannonce})(ConfirmD);
