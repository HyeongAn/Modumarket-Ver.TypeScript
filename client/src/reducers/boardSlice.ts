import { createSlice } from '@reduxjs/toolkit'

const actionName = 'cardInfo';

export interface boardInfo {
    cardInfo: {
        _id :string,
        title: string,
        userId: {
            name: string,
            _id : string
        }, 
        category: number,
        image: string,
        post_content: string,
        area_name : string, 
        post_location : string,
        isvalid : boolean,
        member_num : number,
        member_min : number,
        endtime : string,
    },
    isApplied: boolean
}

// 리듀서가 최초로 호출되었을 때 사용될 상태값.
export const initialState = {
    cardInfo: {
        _id :"",
        title: "",
        userId: {
            name: "",
            _id : ""
        }, 
        category: 0,
        image: "",
        post_content: "",
        area_name : "", 
        post_location : "",
        isvalid : true,
        member_num : 1,
        member_min : 0,
        endtime : "",
    },
    isApplied: false
};

export const boardSlice = createSlice({
    name: actionName,
    initialState,
    reducers: {
        getCardInfo: (state, action) => {
            state.cardInfo = action.payload.cardInfo
        },
        isAppliedInfo : (state, action) => {
            state.isApplied = action.payload.isApplied
        },
    }
})

export const { getCardInfo, isAppliedInfo } = boardSlice.actions;
export default boardSlice.reducer;