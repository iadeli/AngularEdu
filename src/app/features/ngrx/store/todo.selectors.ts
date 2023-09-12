import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(selectTodoState, (state) => {
    console.log("selectTodos:", state.todos);
    return state.todos;
});