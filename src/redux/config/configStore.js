import { configureStore } from "@reduxjs/toolkit";

import todos from "../modules/todosSlice";
import commentsSlice from "../modules/commentsSlice";

const store = configureStore({
    reducer: { todos, commentsSlice} 
})

export default store;
