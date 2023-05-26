//create redux store
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'

export const store=configureStore({
    reducer:{
        //counter slice
        counter:counterReducer,
       
    }
})