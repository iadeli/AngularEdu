import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, deleteTodo, updateTodo, loadTodos } from './todo.actions';
import { Todo } from './todo.entity';
import { TodoState } from './todo.reducer';
import { Observable, of } from 'rxjs';
import { selectTodos } from './todo.selectors';

@Injectable()
export class TodoFacade {
    constructor(private store: Store<TodoState>) { }

    addTodo(todo: Todo) {
        this.store.dispatch(addTodo({ todo }));
    }

    deleteTodo(id: string) {
        this.store.dispatch(deleteTodo({ id }));
    }

    updateTodo(todo: Todo) {
        this.store.dispatch(updateTodo({ todo }));
    }

    loadTodos() {
        this.store.dispatch(loadTodos());
    }

    getTodos(): Observable<Todo[]> {
        return this.store.select(selectTodos);
    }

    updateTodoStatus(updatedTodo: Todo): Observable<void> {
        this.store.dispatch(updateTodo({ todo: updatedTodo }));
        return of(undefined);
    }
}