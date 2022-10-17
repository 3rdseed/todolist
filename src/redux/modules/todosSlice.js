import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[
        {
            user: "",
            title: "",
            body: "",
        },
    ]
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addlist: (state, action) => {
            state.user = [...state.user, action.payload];
        }
    }
});

export const {addlist} = todosSlice.actions;
export default todosSlice.reducer;