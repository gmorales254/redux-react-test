import { createSlice } from "@reduxjs/toolkit";

const initialStateTheme = ""
export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialStateTheme
    },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;