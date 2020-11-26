import { GET_ERRORS } from "./Types";
import swal from 'sweetalert';

//GET_ERRORS 
export const returnErrors = (msg , status) => {
    return {
        type: GET_ERRORS,
        payload :  {msg ,status}
        
    }
}