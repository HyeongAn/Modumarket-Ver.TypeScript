import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'
export interface UserInfo {
    userInfo :{
        id?: string;
        email?: string;
        name?: string;
        age?: number;
        area_name?: string;
    }
    userImg?: string;
    userStatus?: string;
    
}

const actionName = 'user';

export const initialState : UserInfo = {
    userInfo: {},
    userImg: "default",
    userStatus: ""
};

export const userInfoSlice = createSlice({
    name: actionName,
    initialState,
    reducers: {
        getUserInfo: (state : UserInfo, action) => {
            state.userInfo = action.payload.userInfo
        },
        setUserStatus: (state : UserInfo, action) => {
            state.userStatus = action.payload
        },
        changeUserArea: (state : UserInfo, action) => {
            state.userInfo.area_name = action.payload
        },
        getUserImg: (state : UserInfo, action) => {
            state.userImg = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => initialState);
    }
})

export const { getUserInfo, setUserStatus, changeUserArea, getUserImg } = userInfoSlice.actions;
export default userInfoSlice.reducer;