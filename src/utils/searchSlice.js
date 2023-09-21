import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        query : '',
        SearchData:[]
    },
    reducers:{
        setSearchQuery:(state,action)=>{
            state.query = action.payload;
          
        },
        setSearchResults: (state, action) => {
            state.SearchData = action.payload;
        },
    }
})
export const {setSearchQuery} = searchSlice.actions;
export default searchSlice.reducer;