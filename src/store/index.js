import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authStore';

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
})
