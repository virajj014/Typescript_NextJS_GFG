import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './features/value-slice'
import { TypedUseSelectorHook , useSelector } from "react-redux";


export const store = configureStore({
    reducer:{
        // reduder123,
        valueReducer,
        // authReducer,
        // cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 


export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;