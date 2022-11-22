import { configureStore} from "@reduxjs/toolkit";
import { restaurantsReducer } from "../reducers/restaurantsReducer";
import { userReducer } from "../reducers/userReducers";

const reducer = {
    userStore: userReducer,
    restaurantsStore : restaurantsReducer
};
const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
})
export default store;