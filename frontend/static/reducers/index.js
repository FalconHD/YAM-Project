import { combineReducers } from "redux";
import leadReducer from './leadReducer';
import auth from './auth';
import errors from './errors';
import CovoiturageReducer from './CovoiturageReducer'
import UserReducer from './UserReducer'
import MyPostsReducer from './MyPostsReducer'
export default combineReducers({
    leadReducer,
    auth,
    errors,
    CovoiturageReducer,
    UserReducer,
    MyPostsReducer
});