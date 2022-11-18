import { configureStore} from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducers";

const reducer = {
    userStore: userReducer,
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