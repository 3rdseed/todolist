import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "../modules/todosSlice"; // 경로 X

const store = configureStore({
    reducer: { todosSlice }
})

export default store;