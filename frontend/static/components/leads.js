import React , { Component, Fragment }  from "react";
import { render } from "react-dom";
import Header from './/Header';
import { Link , Switch , Route,HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads , deleteLead , getLead} from '../actions/leadActions';
import AddLead from './AddLead';
import Modify from './modifyLead';


export class Leads extends Component{
   state ={
       load:false,
       title:"AddLead",

   };
    
    
    static propTypes = {
        leads: PropTypes.array.isRequired,
        
    }
   
    
    componentDidMount(){
        this.props.getLeads();
        this.props.getLead();
       
        
        
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newLead){
            this.props.leads.push(nextProps.newLead);
        }
    }
    handlClick = (state) =>{
        if(this.state.load){
            const demoClasses = document.querySelectorAll('.myButton');

                // Change the text of multiple elements with a loop
                demoClasses.forEach(element => {
                element.style.display = "block";
                });
            this.setState({
                load:!this.state.load,
                title:"AddLead",
            });
        }else {
            const demoClasses = document.querySelectorAll('.myButton');

                // Change the text of multiple elements with a loop
                demoClasses.forEach(element => {
                element.style.display = "none";
                });
            this.setState({
                load:!this.state.load,
                title:"ModifyLead",
               
            });
        }
       
    }
    
    
    render(){

       
       


        return(
            <Provider store={store}>
                <Fragment>
                    
                    
                    <h2 align="center">Leads</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Creation time</th>
                                <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                    {this.props.leads.map(lead =>(
                                        <tr key={lead.id}>
                                            <td>{lead.id}</td>
                                            <td>{lead.name}</td>
                                            <td>{lead.email}</td>
                                            <td>{lead.message}</td>
                                            <td><button onClick={this.props.deleteLead.bind(this,lead.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                            <td ><button onClick={this.props.getLead.bind(this,lead.id)} className="btn btn-danger btn-sm myButton" >Modify</button></td>
                                        </tr>
                                       
                                    ))}
                                    <button onClick={this.handlClick}  className="btn btn-danger btn-sm">{this.state.title}</button> 
                                </tbody>
                               
                    </table>
                   
                    
                    <div>
                    
                    {this.state.load ? <AddLead/>:<Modify/>}
                    </div>
                    
                </Fragment>
                
            </Provider>

        )
    }
}
const mapStateToProps = state => ({
        leads: state.leadReducer.Leads,
        newLead: state.leadReducer.Lead
        
    });

export default connect(mapStateToProps , {getLeads , deleteLead , getLead})(Leads);
