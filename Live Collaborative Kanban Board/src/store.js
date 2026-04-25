
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer, 
  },
});


store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem(
      "todos",
      JSON.stringify(state.todos.items)
    );
  } catch (e) {
    console.error("LocalStorage error:", e);
  }
});

export default store;
