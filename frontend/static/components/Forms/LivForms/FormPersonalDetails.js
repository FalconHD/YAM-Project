import React, { Component } from 'react';


export class FormPersonalDetails extends Component {
 
  

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="formcontent">
      <input className="rginput" value={values.ville_distination} name ='ville_distination' onChange={handleChange('ville_distination')}  type="text" placeholder="Destination City" />
      <input placeholder="Goods Type" list="Goods-Types" className="rginput" onChange={handleChange('bagages')}/>

        <datalist  id="Goods-Types">
            <option value="normal Goods"/>
            <option value="heavy Goods"/>
            <option value="very heavy Goods"/>
        </datalist>
        
        <input className="rginput" value={values.service} name ='service'  type="text" placeholder="service" />
      
        <textarea className="rginput" onChange={handleChange('comment')}  id="story" placeholder="what else ...  !!! "
          rows="5" cols="20">
            
        </textarea>
      
      
    
    </div>
               
      
    
    );
  }
}

export default FormPersonalDetails;
