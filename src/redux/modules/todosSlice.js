import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo:[
        {
            id: "0",
            user: "사용자 테스트1",
            title: "타이틀 테스트1",
            body: "내용 테스트1",
        },
    ]
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addList: (state, action) => {
            state.todo = [...state.todo, action.payload];
        }
    }
});



// 액션크리에이터는 컴포넌트에서 사용하기 위해 export
export const {addList} = todosSlice.actions;
// reducer는 configStore에 등록하기 위해 export default한다.
export default todosSlice.reducer;