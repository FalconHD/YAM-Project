import { GET_LEADS , DELETE_LEAD , ADD_LEAD , MOD_LEAD , GET_LEAD,PUT_PROFILE,GET_PROFILE , GET_PROFILES} from "../actions/Types.js";


const initialState = {
    Profiles: [],
    profile:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROFILES:
            return {
                ...state,
                Profiles : action.payload
            };
        case DELETE_LEAD:
            return {
                ...state,
                profile:state.Profiles.filter(profile => (profile.id == action.payload))
            }
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload[0]
            }
         case GET_LEAD:
            return {
                ...state,
                Leads:state.Leads.filter(lead => (lead.id !== action.payload.id)),
                Lead :  action.payload,
            };
        case PUT_PROFILE:
            return {
                ...state,
                profile: action.payload[0]
            };
            
        default :
            return state;
    }
}