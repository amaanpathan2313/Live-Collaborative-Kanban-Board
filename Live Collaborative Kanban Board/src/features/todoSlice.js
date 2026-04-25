 
 import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? { items: JSON.parse(data) } : { items: [] };
  } catch {
    return { items: [] };
  }
};

const todoSlice = createSlice({
  name: "todoLocalStorage",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    changeTodoStatus: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, changeTodoStatus, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
