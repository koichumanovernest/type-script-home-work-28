import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo, TodosState } from ".";

const initialState: TodosState = {
	todos: [],
};

export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, { payload }: PayloadAction<Todo>) => {
			state.todos.push(payload);
		},
		deleteTodo: (state, { payload }: PayloadAction<number>) => {
			state.todos = state.todos.filter((todo) => todo.id !== payload);
		},
		deleteAll: (state) => {
			state.todos = [];
		},
		editTodo: (state, { payload }: PayloadAction<Todo>) => {
			state.todos = state.todos.map((todo) =>
				todo.id === payload.id ? { ...todo, ...payload} :  todo 
			);
		},
	},
});

export const { addTodo, deleteTodo, deleteAll,editTodo } = todoSlice.actions;
