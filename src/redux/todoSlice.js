const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    delTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, delTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
