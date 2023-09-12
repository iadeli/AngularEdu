import { Injectable } from '@angular/core';
import { Todo } from '../store/todo.entity';
import { Observable, of } from 'rxjs';

@Injectable()
export class TodoService {
    private todos: Todo[] = [];

    constructor() {
        this.todos = [];
    }

    addTodo(todo: Todo): void {
        this.todos.push(todo);
    }

    getTodos(): Observable<Todo[]> {
        return of(this.todos);
    }

    removeTodo(todo: Todo): void {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}