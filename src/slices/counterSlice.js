//create counter slice(part of state)
import {createSlice} from '@reduxjs/toolkit';



export const counterSlice=createSlice({
    name:'counter',
    initialState:{counter:10},
    reducers:{
        //reducer functions
        increment:(state,action)=>{
            console.log("action ",action)
            state.counter=state.counter+1;
        },
        decrement:(state,action)=>{
            state.counter=state.counter-1;
        },
        incrementByAValue:(state,action)=>{
            state.counter=state.counter+action.payload;
        }
    }
})


//export common reducer
export default counterSlice.reducer
//create action creator functions
export let {increment,decrement,incrementByAValue}=counterSlice.actions;