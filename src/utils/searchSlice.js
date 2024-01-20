import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            state = Object.assign(state,action)
            // state = {...action.payload,...state} check why this is not working
        },
    },

});

export const {cacheResults} =searchSlice.actions;

export default searchSlice.reducer;