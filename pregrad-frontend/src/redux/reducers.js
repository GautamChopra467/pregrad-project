import {  createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios" ;

const initialState = {
    health : 20 
}

export const fetchHealth = createAsyncThunk("users/fetchHealth",async(id)=>{
    const {data} =  await axios.get(`http://localhost:8000/student/profilehealth/${id}`) ;
   
    return data.profileHealth ;
})

const healthReducer = createSlice({
    name : "profile" ,
    initialState ,
    reducers : {
        profileHealth(state , action ){
            state.health = action.payload
        }
    },
    extraReducers :{
        [fetchHealth.fulfilled] :(state,action)=>{
            state.health = action.payload
        }

    }
})

export const {profileHealth} = healthReducer.actions;

export default healthReducer.reducer
