import React, { Component } from 'react';


export class FormPersonalDetails extends Component {
 
  

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="formcontent">
      <input className="rginput" value={values.distination} name ='distination' onChange={handleChange('distination')}  type="text" placeholder="Destination" />
      <input placeholder="Goods Type" list="Goods-Types" className="rginput" onChange={handleChange('bagages')}/>

        <datalist  id="Goods-Types">
            <option  value="without Goods"/>
            <option value="normal Goods"/>
            <option value="heavy Goods"/>
            <option value="very heavy Goods"/>
        </datalist>
        <input className="rginput" value={values.lieu} name ='lieu' onChange={handleChange('lieu')}  type="text" placeholder="Exact Place" />

        <input className="rginput" value={values.num_places} name ='num_places' onChange={handleChange('num_places')}  type="number" placeholder="Number Of Places" />
      
        <textarea className="rginput" onChange={handleChange('comment')}  id="story" placeholder="what else ...  !!! "
          rows="5" cols="20">
            
        </textarea>
      
      
    
    </div>
               
      
    
    );
  }
}

export default FormPersonalDetails;
