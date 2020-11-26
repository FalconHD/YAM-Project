import React from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import  {returnErrors}  from './message'
import { GET_LEADS , DELETE_LEAD , ADD_LEAD, GET_ERRORS , GET_LEAD , PUT_LEAD} from './Types';
import { tokenConfig } from './auth'



export const getLeads = () => (dispatch,setState) =>{
    axios.get('../api/Leads/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}

export const deleteLead = (id) => (dispatch,setState) =>{
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Lead!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`../api/Leads/${id}/`,tokenConfig(setState))
            .then(res => {
                dispatch({
                    type: DELETE_LEAD,
                    payload : id
                });
            })
            .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
          swal("Poof! Your Lead  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Lead is safe!");
        }
            
      });
      
    
}


//ADD LEAD 
export const Add_Lead = (lead) => (dispatch,setState)  =>{
    axios.post('../api/Leads/', lead ,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: ADD_LEAD,
                payload : res.data
                
            });
            swal("Done!", "Lead Added", "success");
        })
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
           
    
    }



//MODIFY 

export const getLead = (id) => (dispatch,setState)  =>{
    axios.get(`../api/Leads/${id}/`,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_LEAD,
                payload : res.data
            });
        })
   .catch(function(err){

   });
    
}
export const putLead = (id,lead) => (dispatch,setState)  =>{
    
    axios.put(`../api/Leads/${id}/`,lead, tokenConfig(setState))
        
        .then(res => {
            dispatch({
                type: PUT_LEAD,
                payload : res.data
            });
        })
        
   .catch(err =>{
        console.log(err);
   });
}