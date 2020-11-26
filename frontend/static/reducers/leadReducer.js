import { GET_LEADS , DELETE_LEAD , ADD_LEAD , MOD_LEAD , GET_LEAD,PUT_LEAD} from "../actions/Types.js";


const initialState = {
    Leads: [],
    Lead:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LEADS:
            return {
                ...state,
                Leads : action.payload
            };
        case DELETE_LEAD:
            return {
                ...state,
                Leads:state.Leads.filter(lead => (lead.id !== action.payload))
            }
        case ADD_LEAD:
            return {
                ...state,
                Leads:[...state.Leads , action.payload]
            }
         case GET_LEAD:
            return {
                ...state,
                Leads:state.Leads.filter(lead => (lead.id !== action.payload.id)),
                Lead :  action.payload,
            };
        case PUT_LEAD:
            return {
                ...state,
                Leads:[...state.Leads , action.payload]
            };
            
        default :
            return state;
    }
}