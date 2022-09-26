import { createSlice } from '@reduxjs/toolkit'
import { PURGE } from "redux-persist"

export interface Authentification {
    isLogin: boolean;
    accessToken: string;
}

const actionName = 'authentication';

export const initialState : Authentification = {
    isLogin: false,
    accessToken: "",
};

export const loginSlice = createSlice({
    name: actionName,
    initialState,
    reducers: {
        login: (state : Authentification, action) => {
            state.isLogin = true;
            state.accessToken = action.payload;
        },
        logout: (state : Authentification) => {
            state.isLogin = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(PURGE, () => initialState);
    }
})

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;