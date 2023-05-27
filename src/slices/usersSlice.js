import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

//make API req
export let usersPromise=createAsyncThunk('get-users',async(thunkApi)=>{
    let res=await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("res is ",res)

    if(res.status===200){
        return res.data;
    }else{
      return thunkApi.rejectWithValue()
    }
})




export const usersSlice = createSlice({
  name: "users",
  initialState: { users:[],error:'',status:'loading'},
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(usersPromise.pending,(state,action)=>{
            state.status='pending...'
    })
    .addCase(usersPromise.fulfilled,(state,action)=>{
        console.log("action isn fulfilled is ",action)
            state.users=action.payload;
            state.status='success';
            state.error=''
    })
    .addCase(usersPromise.rejected,(state,action)=>{
        console.log("action in rejected",action)
            state.status='error occurred';
            state.error=action.error.message;
            state.users=[]
    })
  }
});

//generate  & export action creator functions
export const {} = usersSlice.actions;

//export reducer of the slice
export default usersSlice.reducer;
