import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:[
        {
            id: 0,
            title: "가나다",
            body: "투두리스트 만들기",
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