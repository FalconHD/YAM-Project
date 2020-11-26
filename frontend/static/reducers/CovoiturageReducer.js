import { GET_LEADS , GET_POST,DELETE_LEAD , ADD_LEAD , MOD_LEAD , GET_LEAD,PUT_LEAD  ,ADD_ANNONCE , GET_POSTS ,GET_POSTSR,GET_POSTSO} from "../actions/Types.js";


const initialState = {
    annonces: [],
    annonce:{},
    Post:[],
    annoncesCity: [],
    annoncesCity2: []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            return {
                ...state,
                annonces :  action.payload
            };
        case GET_POSTSR:
                return {
                    ...state,
                    annoncesCity :  action.payload
                };
        case GET_POSTSO:
            return {
                ...state,
                annoncesCity2 :  action.payload
            };
        case DELETE_LEAD:
            return {
                ...state,
                annonces:state.Leads.filter(lead => (lead.id !== action.payload))
            }
        case ADD_ANNONCE:
            return {
                ...state,
                annonce:action.payload
            }
         case GET_POST:
            return {
                ...state,
                Post :  state.annonces.filter(Post => (Post.id == action.payload)),
            };
        case PUT_LEAD:
            return {
                ...state,
                annonces:[...state.Leads , action.payload]
            };
            
        default :
            return state;
    }
}