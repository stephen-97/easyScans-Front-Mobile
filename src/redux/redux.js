import { configureStore } from '@reduxjs/toolkit'
import {userSlice} from "./slices/userSlice";


export const {setUser} = userSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})

