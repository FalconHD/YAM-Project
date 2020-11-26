import { GET_LEADS , DELETE_RPOST,DELETE_OPOST ,DELETE_SPOST,DELETE_TPOST , ADD_LEAD , MOD_LEAD , GET_LEAD,PUT_POST ,ADD_ANNONCE , GET_POST, GET_COVO,GET_COVR , GET_SHIP , GET_TRANS} from "../actions/Types.js";


const initialState = {
    CovPostsO: [],
    CovPostsR: [],
    ShipPosts: [],
    TransPosts:[],
    Post:{}
    
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_COVO:
            return {
                ...state,
                CovPostsO :  action.payload
            };
        case GET_COVR:
            return {
                ...state,
                CovPostsR :  action.payload
            };
        case GET_SHIP:
            return {
                ...state,
                ShipPosts : action.payload
            };
        case GET_TRANS:
            return {
            ...state,
            TransPosts : action.payload
            };
            
        case DELETE_TPOST:
            return {
                ...state,
                TransPosts:state.TransPosts.filter(Post => (Post.id !== action.payload))
            }
        case DELETE_SPOST:
            return {
                ...state,
                ShipPosts:state.ShipPosts.filter(Post => (Post.id !== action.payload))
            }
        case DELETE_OPOST:
            return {
                ...state,
                CovPostsO:state.CovPostsO.filter(Post => (Post.id !== action.payload))
            }
        case DELETE_RPOST:
            return {
                ...state,
                CovPostsR:state.CovPostsR.filter(Post => (Post.id !== action.payload))
            }
        case ADD_ANNONCE:
            return {
                ...state,
                annonces:[...state.Leads , action.payload]
            }
         case GET_POST:
            return {
                ...state,
                Post :  action.payload,
            };
        case PUT_POST:
            return {
                ...state,
                Post:action.payload
            };
            
        default :
            return state;
    }
}