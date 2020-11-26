import React , { Component, Fragment }  from "react";
import { render } from "react-dom";

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Add_Lead } from '../actions/leadActions'
import swal from 'sweetalert';








export class AddLead extends Component{
    state = {
        name: '',
        email:'',
        message:'',
    };
    
    static propTypes = {
        Add_Lead:PropTypes.func.isRequired,
        
        
    };

    onChangeType = e => this.setState({
        [e.target.name]:e.target.value

    });

    onSubmit = e => {
        e.preventDefault();
        const {name , email ,message }= this.state;
        const lead = { name , email , message };
        this.props.Add_Lead(lead);
        
       
        

    };
    
   
    
    
   
    render() {
       
        const { name , email , message} =this.state;
        return(
            
                <Fragment>
                    <div className="container FormBox">
                    <h3 align="center">Add Lead</h3>
                        <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" value={name}  placeholder="First name" onChange={this.onChangeType} />
                            </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" className="form-control"   value={email}  onChange={this.onChangeType}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                                <textarea name="message" className="form-control"  value={message}   onChange={this.onChangeType}  id="exampleFormControlTextarea1" rows="3"></textarea>
                         </div>    
                                            
                        <button type="submit" className="btn btn-primary submitForm justify-content-center " >Submit</button>
                        
                        </form> 

                    </div>
                </Fragment>
                
           

        )
    };

}


export default connect(null,{Add_Lead})(AddLead);
