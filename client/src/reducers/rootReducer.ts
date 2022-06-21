import { combineReducers } from "redux";
import loginSlice from './loginSlice';
import userInfoSlice from './userInfoSlice';
import modalSlice from './modalSlice';
import myPostSlice from './myPostSlice';

const rootReducer = combineReducers({
    login: loginSlice,
    userInfo: userInfoSlice,
    modal: modalSlice,
    mypost: myPostSlice,
})

export default rootReducer;