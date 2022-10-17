import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const ADD_TODO = "ADD_TODO";

// export const addTodo = (payload) => {
//     return {
//       type: ADD_TODO,
//       payload,
//     };
//   };
// export const __addTodoThunk = createAsyncThunk(
//     "ADD_TODO",
//     async (arg, thunkAPI) => {
//       try {
//         const { data } = await axios.post(`/todos`, arg);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e);
//       }
//     }
//   );
// export const __deleteTodoThunk = createAsyncThunk(
//     "DELETE_TODO",
//     async (arg, thunkAPI) => {
//       try {
//         axios.delete(`/todos/${arg}`);
//         return thunkAPI.fulfillWithValue(arg);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.code);
//       }
//     }
//   );
  
// export const __getTodosThunk = createAsyncThunk(
//     "GET_TODOS",
//     async (_, thunkAPI) => {
//       try {
//         const { data } = await axios.get(`/todos`);
//         return thunkAPI.fulfillWithValue(data);
//       } catch (e) {
//         return thunkAPI.rejectWithValue(e.code);
//       }
//     }
//   );
const initialState = {
    user:[
        {
            user: "",
            title: "",
            body: "",
        },
    ]
    // todos: [],
    // error: null,
    // isLoading: false,
    // isSuccess: false,
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addlist: (state, action) => {
            state.user = [...state.user, action.payload];
        },
        // clearTodo: (state, action) => {
        //     state.isSuccess = false;
        //   },
    },
    //extraReducers: {
        // [__getTodosThunk.fulfilled]: (state, action) => {
        //     state.isLoading = false;
        //     state.todos = action.payload;
        //   },
        //   [__getTodosThunk.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //   },
        //   [__getTodosThunk.pending]: (state) => {
        //     state.isLoading = true;
        //   },
        //   [__addTodoThunk.pending]: (state) => {
        //     state.isSuccess = false;
        //     state.isLoading = true;
        //   },
        //   [__addTodoThunk.fulfilled]: (state, action) => {
        //     state.isSuccess = true;
        //     state.isLoading = false;
        //     state.todos.push(action.payload);
        //   },
        //   [__addTodoThunk.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        //   },
      
        //   [__deleteTodoThunk.fulfilled]: (state, action) => {
        //     const target = state.todos.findIndex(
        //       (comment) => comment.id === action.payload
        //     );
      
        //     state.todos.splice(target, 1);
        //   },
        //   [__deleteTodoThunk.rejected]: () => {},
        //   [__deleteTodoThunk.pending]: () => {},
    //},
});

export const {addlist} = todosSlice.actions;
export default todosSlice.reducer;