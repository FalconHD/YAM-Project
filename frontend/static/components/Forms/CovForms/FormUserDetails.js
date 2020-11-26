import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {

  
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="formcontent">
      <input className="rginput" value={values.lieu_depart} name ='lieu' onChange={handleChange('lieu_depart')} type="text" placeholder="From" />
      <input className="rginput" value={values.lieu_arrive} name ='text' onChange={handleChange('lieu_arrive')}  type="tex" placeholder="To" />
      <input className="rginput" value={values.num_tele} name ='password' onChange={handleChange('num_tele')}  type="number" placeholder="Phone Number" />
      <input className="rginput" value={values.ville} name ='password2' onChange={handleChange('ville')}  type="text" placeholder="City" />
      <div className="date-input">
      <div className="datetime">
    <labal>Going Time</labal><br/>
    <input onChange={handleChange('date_depart')}
    value={values.date_depart}
    type="datetime-local" id="meeting-time"
    name="meeting-time" 
    required/>
      </div>
    
    <div className="datetime">
    <labal>Arrival Time</labal><br/>
    <input onChange={handleChange('date_arrive')}
    value={values.date_arrive}
    type="datetime-local" id="meeting-time"
    name="meeting-time" 
    />
    </div>
    </div>
    
    </div>
    );
  }
}

export default FormUserDetails;
