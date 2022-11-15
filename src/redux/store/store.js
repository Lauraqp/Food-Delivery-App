import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useReducer } from "../reducers/reducers";

const reducer = {
    userStore: useReducer,
};
const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})
export default store;