import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './fetaures/auth-slice';
import valueReducer from './fetaures/value-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        // authReducer,
        valueReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const  useAppSelector : TypedUseSelectorHook<RootState> = useSelector;