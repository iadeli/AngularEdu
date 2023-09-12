import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from './todo.entity';
import { setTodos, addTodo, deleteTodo, updateTodo } from './todo.actions';

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: []
};

const reducer = createReducer(
    initialState,
    on(setTodos, (state, { todos }) => {
        console.log("Updating todos:", todos);
        return { ...state, todos };
    }),
    on(addTodo, (state, { todo }) => {
        console.log("Adding todo:", todo);
        return { ...state, todos: [...state.todos, todo] };
    }),
    on(deleteTodo, (state, { id }) => {
        console.log("Deleting todo with ID:", id);
        return { ...state, todos: state.todos.filter((todo) => todo.id !== id) };
    }),
    on(updateTodo, (state, { todo }) => {
        console.log("Updating todo:", todo);
        return {
            ...state,
            todos: state.todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)),
        };
    })
);

export function TodoReducer(state: TodoState | undefined, action: Action) {
    return reducer(state, action);
}