
import axios from 'axios'
import swal from 'sweetalert';
import  {returnErrors}  from './message'
import { PUT_PROFILE, ADD_PROFILE  ,ADD_ANNONCE ,GET_PROFILES , GET_PROFILE} from './Types';
import { tokenConfig } from './auth'



export const getProfile = () => (dispatch,setState) =>{
    axios.get('../api/profile/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_PROFILE,
                payload : res.data
            });
            
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getProfiles = () => (dispatch,setState) =>{
    axios.get('../api/profiles/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_PROFILES,
                payload : res.data
            });
            
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}





export const Add_Oannonce = (Oanoonce) => (dispatch,setState)  =>{
    axios.post('../api/Oannonce/', Oanoonce ,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: ADD_ANNONCE,
                payload : res.data
                
            });
            swal("Done!", "Oanoonce Added", "success");
        })
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
           
    
    }

export const Add_Dannonce = (Danoonce) => (dispatch,setState)  =>{
    axios.post('../api/Dannonces/', Danoonce ,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: ADD_ANNONCE,
                payload : res.data
                    
            });
            swal("Done!", "Danoonce Added", "success");
        })
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
               
        
    }



//MODIFY 




export const updateProfile = (id,state) => (dispatch,setState)  =>{

let form_data = new FormData();
form_data.append('image_profile', state.image_profile, state.image_profile.name);
    form_data.append('Cover', state.Cover, state.Cover.name);
    form_data.append('first_name', state.first_name);
    form_data.append('last_name', state.last_name);
    form_data.append('City', state.City);
    form_data.append('Nation', state.Nation);
    form_data.append('Description', state.Description);
    form_data.append('CIN', state.CIN);
    let url = `../api/profile/${id}/`;
    axios.put(url, form_data, tokenConfig(setState))
        .then(res => {
            dispatch({
                type: PUT_PROFILE,
                payload : res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const addProfile = (state) => (dispatch,setState)  =>{

    let form_data = new FormData();
        form_data.append('image_profile', state.image_profile, state.image_profile.name);
        form_data.append('Cover', state.Cover, state.Cover.name);
        form_data.append('first_name', state.first_name);
        form_data.append('last_name', state.last_name);
        form_data.append('City', state.City);
        form_data.append('Nation', state.Nation);
        form_data.append('Description', state.Description);
        form_data.append('CIN', state.CIN);
        let url = '../api/profile/';
        axios.post(url, form_data, tokenConfig(setState))
            .then(res => {
                    dispatch({
                        type: ADD_PROFILE,
                        payload : res.data
                    });
                })
            .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
    }