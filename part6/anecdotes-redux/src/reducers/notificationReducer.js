import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        content: "",
        isVisible: false,
    },
    reducers: {
        setNotification: (state, action) => {
            state.content = action.payload
            state.isVisible = true
        },
        setIsVisible: (state, action) => {
            state.isVisible = action.payload
        }
    }
})

export const {setNotification, setIsVisible} = notificationSlice.actions;
export default notificationSlice.reducer;