import React, { Component, Fragment } from 'react'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import FormPersonalDetails from './FormPersonalDetails'
import FormUserDetails from './FormUserDetails'
import Success from './Success'
import Confirm from './ConfirmD'
import UserForm from './UserForm'











class CovoiturageDemonde extends Component {
  state = {
    step: 1,
    lieu_depart: "",
    lieu_arrive: "",
    date_depart: "",
    date_arrive: "",
    is_accepted: false,
    num_tele: "",
    ville: "",
    bagages: "",
    comment:"" ,
    lieu: "",
    distination: "",
    num_places: "",

  };
    
      // Proceed to next step
      nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
    
      // Go back to prev step
      prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
    
      // Handle fields change
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
       
      
     
    

    render() {
       
      const { lieu_depart, lieu_arrive, date_depart, date_arrive, is_accepted, num_tele ,ville,bagages,comment,lieu,distination,num_places} = this.state;
      const values = { lieu_depart, lieu_arrive, date_depart, date_arrive, is_accepted, num_tele ,ville,bagages,comment,lieu,distination,num_places};
        switch (this.props.step) {
            case 1:
              return (
                  
                <FormUserDetails
                  
                  handleChange={this.handleChange}
                  values={values}
                  
                  
                />
              );
            case 2:
              return (
                <FormPersonalDetails
                  
                  handleChange={this.handleChange}
                  values={values}
                  isActive={this.props.isActive}
                 
                />
              );
            case 3:
              return (
                <Confirm
                  
                  values={values}
                  
                />
              );
            case 4:
              return <Success />;
            default:
              
          }
               
            
        
     }
     
}


export default CovoiturageDemonde;