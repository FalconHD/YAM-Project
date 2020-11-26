import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = () => {
    
    this.props.nextStep();
  };

  back = () => {
    
    this.props.prevStep();
  };

  

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="formcontent">
      <input className="rginput" value={values.ville_distination} name ='ville_distination' onChange={handleChange('ville_distination')}  type="text" placeholder="Destination City" />
      <input placeholder="Goods Type" list="Goods-Types" className="rginput" onChange={handleChange('bagages')}/>

        <datalist  id="Goods-Types">
            <option  value="without Goods"/>
            <option value="normal Goods"/>
            <option value="heavy Goods"/>
            <option value="very heavy Goods"/>
        </datalist>
        {this.props.isActive ? <input className="rginput" value={values.num_places} name ='num_places' onChange={handleChange('num_places')}  type="number" placeholder="Number Of Places" /> : <input className="rginput" value={values.num_personnes} name ='num_personnes' onChange={handleChange('num_personnes')}  type="number" placeholder="Number Of People" />}
        <input className="rginput" value={values.car_model} name ='car_model' onChange={handleChange('car_model')}  type="text" placeholder="Car Model" />
      
        <textarea className="rginput" onChange={handleChange('comment')}  id="story" placeholder="what else ...  !!! "
          rows="5" cols="20">
            
        </textarea>
      
      
    
    </div>
               
      
    
    );
  }
}

export default FormPersonalDetails;
