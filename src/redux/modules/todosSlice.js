import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// createAsyncThunk는 비동기 작업을 처리하는 액션을 만들어준다.
export const __deleteTodoThunk = createAsyncThunk(
    "DELETE_TODO", // 내가 적고싶은 이름으로 적으면 된다.
    // 'todosSlice/deleteTodoThunk'
    (payload, tunkAPI) => {

        // try {
        //     const date = await axios.get("http://localhost:3001/todos")
        //     console.log(data);
        // } catch (error) {
        //     console.log(error);
        // }
    },
)

const initialState = {
    todo:[
        {
            id: "",
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
        addList: (state, action) => {
            state.todo = [...state.todo, {...action.payload, id: state.todo.length}]; //id:에 값 넣어주는 코드
        },
        deleteList: (state, action) => {
            state.todo = state.todo.filter((todo) => {
                if (todo.id === action.payload) {
                    return false;
                }
                return true;
            })
        },
    }
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export
export const {addList, deleteList} = todosSlice.actions;
// reducer는 configStore에 등록하기 위해 export default한다.
export default todosSlice.reducer;