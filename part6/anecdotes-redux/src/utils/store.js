import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from "../reducers/anecdoteReducer.js";
import filterReducer from "../reducers/filterReducer.js";
import notificationReducer from "../reducers/notificationReducer.js";

const store = configureStore({
    reducer: {
        votes: anecdoteReducer,
        filter: filterReducer,
        notification: notificationReducer,
    }
})
export default store;