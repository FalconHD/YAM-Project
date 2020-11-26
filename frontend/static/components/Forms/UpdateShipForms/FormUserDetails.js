import React, { Component } from 'react';


export class FormUserDetails extends Component {

  
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="formcontent">
      <input className="rginput" value={values.lieu_depart} name ='lieu_depart' onChange={handleChange('lieu_depart')} type="text" placeholder="From" />
      <input className="rginput" value={values.lieu_arrive} name ='lieu_arrive' onChange={handleChange('lieu_arrive')}  type="tex" placeholder="To" />
      <input className="rginput" value={values.num_tele} name ='num_tele' onChange={handleChange('num_tele')}  type="number" placeholder="Phone Number" />
      <input className="rginput" value={values.ville} name ='ville' onChange={handleChange('ville')}  type="text" placeholder="City" />
      <div className="date-input">
      <div className="datetime">
    <labal>Going Time</labal><br/>
    <input onChange={handleChange('date_depart')}
    value={values.date_depart}
    type="datetime-local" id="date_depart"
    name="date_depart" 
    />
      </div>
    
    <div className="datetime">
    <labal>Arrival Time</labal><br/>
    <input onChange={handleChange('date_arrive')}
    value={values.date_arrive}
    type="datetime-local" id="date_arrive"
    name="date_arrive" 
    />
    </div>
    </div>
    
    </div>
    );
  }
}

export default FormUserDetails;
