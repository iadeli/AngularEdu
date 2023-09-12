import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.entity';

export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: string }>());
export const updateTodo = createAction('[Todo] Update Todo', props<{ todo: Todo }>());
export const loadTodos = createAction('[Todo] Load Todos');
export const setTodos = createAction('[Todo] Set Todos', props<{ todos: Todo[] }>());
