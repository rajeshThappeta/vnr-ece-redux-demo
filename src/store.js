//create redux store
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import usersReducer from './slices/usersSlice'

export const store=configureStore({
    reducer:{
        //counter slice
        counter:counterReducer,
        users:usersReducer
       
    }
})