import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.items.push({ id: Date.now(), task: action.payload });
    },
    removeToDo: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
  }
});

export const { addToDo, removeToDo } = todoSlice.actions;
export default todoSlice;