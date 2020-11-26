
import axios from 'axios'
import swal from 'sweetalert';
import  {returnErrors}  from './message'
import { DELETE_SPOST,DELETE_OPOST,DELETE_RPOST, GET_POST , PUT_POST ,ADD_ANNONCE,GET_POSTS , GET_COVO,GET_COVR , GET_SHIP , GET_TRANS , DELETE_TPOST ,GET_POSTSR ,GET_POSTSO} from './Types';
import { tokenConfig } from './auth'


export const getCovPost = (id) => (dispatch,setState) =>{
    axios.get('../api/Oannonces/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POST,
                payload : id
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getCovPosts = () => (dispatch,setState) =>{
    axios.get('../api/Oannonces/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getCovPostsR = () => (dispatch,setState) =>{
    axios.get('../api/Dannonces/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getCovPostsOo = () => (dispatch,setState) =>{
    axios.get('../api/Oannonces/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POSTSO,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getCovPostsRr = () => (dispatch,setState) =>{
    axios.get('../api/Dannonces/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POSTSR,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}


export const getShipPosts = () => (dispatch,setState) =>{
    axios.get('../api/LivAll/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}

export const getTransPosts = () => (dispatch,setState) =>{
    axios.get('../api/Vannonces/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
/*GET MY POSTS */

export const getMyCovPosts = () => (dispatch,setState) =>{
    axios.get('../api/Oannonce/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_COVO,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getMyCovPostsR = () => (dispatch,setState) =>{
    axios.get('../api/Dannonce/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_COVR,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}

export const getMyShipPosts = () => (dispatch,setState) =>{
    axios.get('../api/Liv/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_SHIP,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}

export const getMyTransPosts = () => (dispatch,setState) =>{
    axios.get('../api/Vannonce/',tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_TRANS,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getMyTransPost = (id) => (dispatch,setState) =>{
    axios.get(`../api/Vannonce/${id}/`,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POST,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getMyShipPost = (id) => (dispatch,setState) =>{
    axios.get(`../api/Liv/${id}/`,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POST,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}

export const getMyCovoPost = (id) => (dispatch,setState) =>{
    axios.get(`../api/Oannonce/${id}/`,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POST,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}
export const getMyCovrPost = (id) => (dispatch,setState) =>{
    axios.get(`../api/Dannonce/${id}/`,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: GET_POST,
                payload : res.data
            });
        })
   .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
}


/*My Posts end*/ 
/*Delet My Posts Start*/ 
export const deleteTransPost = (id) => (dispatch,setState) =>{
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Post!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`../api/Vannonce/${id}/`,tokenConfig(setState))
            .then(res => {
                dispatch({
                    type: DELETE_TPOST,
                    payload : id
                });
                
            })
            .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
          swal("Poof! Your Post  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Post is safe!");
        }
            
      });
      
    
}
export const deleteCovoPost = (id) => (dispatch,setState) =>{
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Post!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`../api/Oannonce/${id}/`,tokenConfig(setState))
            .then(res => {
                dispatch({
                    type: DELETE_OPOST,
                    payload : id
                });
                
            })
            .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
          swal("Poof! Your Post  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Post is safe!");
        }
            
      });
      
    
}
export const deleteCovrPost = (id) => (dispatch,setState) =>{
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Post!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`../api/Dannonce/${id}/`,tokenConfig(setState))
            .then(res => {
                dispatch({
                    type: DELETE_RPOST,
                    payload : id
                });
                
            })
            .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
          swal("Poof! Your Post  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Post is safe!");
        }
            
      });
      
    
}
export const deleteShipPost = (id) => (dispatch,setState) =>{
    
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Post!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(`../api/Liv/${id}/`,tokenConfig(setState))
            .then(res => {
                dispatch({
                    type: DELETE_SPOST,
                    payload : id
                });
                
            })
            .catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
          swal("Poof! Your Post  has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your Post is safe!");
        }
            
      });
      
    
}

/*Delet My Posts End*/ 
//ADD LEAD 
export const Add_Tannonce = (Tanoonce) => (dispatch,setState)  =>{
    axios.post('../api/Vannonce/', Tanoonce ,tokenConfig(setState))
        .then(res => {
            
            dispatch({
                type: ADD_ANNONCE,
                payload : res.data
                
            });
            
        })
        .catch(err => dispatch(returnErrors(err.response.data,err.response.status)))
       
           
    
    }
export const Add_Lannonce = (Lanoonce) => (dispatch,setState)  =>{
    axios.post('../api/Liv/', Lanoonce ,tokenConfig(setState))
        .then(res => {
            dispatch({
                type: ADD_ANNONCE,
                payload : res.data
                
            });
            swal("Done!", "Oanoonce Added", "success");
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


export const putTransPost = (id,Post) => (dispatch,setState)  =>{
    
    axios.put(`../api/Vannonce/${id}/`,Post, tokenConfig(setState))
        
        .then(res => {
            dispatch({
                type: PUT_POST,
                payload : res.data
            });
        })
        swal("Done!", "Update Done", "success")
   .catch(err =>{
        console.log(err);
   });
}

export const putCovoPost = (id,Post)   => (dispatch,setState)  =>{
    
    axios.put(`../api/Oannonce/${id}/`,Post, tokenConfig(setState))
        
        .then(res => {
            dispatch({
                type: PUT_POST,
                payload : res.data
            });
        })
        swal("Done!", "Update Done", "success")
   .catch(err =>{
        console.log(err);
   });
}

export const putCovrPost = (id,Post)  => (dispatch,setState)  =>{
    
    axios.put(`../api/Dannonce/${id}/`,Post, tokenConfig(setState))
        
        .then(res => {
            dispatch({
                type: PUT_POST,
                payload : res.data
            });
        })
        swal("Done!", "Update Done", "success")
   .catch(err =>{
        console.log(err);
   });
}
export const putShipPost = (id,Post) => (dispatch,setState)  =>{
    
    axios.put(`../api/Liv/${id}/`,Post, tokenConfig(setState))
        
        .then(res => {
            dispatch({
                type: PUT_POST,
                payload : res.data
            });
        })
        swal("Done!", "Update Done", "success")
   .catch(err =>{
        console.log(err);
   });
}