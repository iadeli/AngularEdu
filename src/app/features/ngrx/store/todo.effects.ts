import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, setTodos } from './todo.actions';
import { mergeMap, map } from 'rxjs/operators';
import { TodoService } from '../service/todo.service';

@Injectable()
export class TodoEffects {

    constructor(private actions$: Actions, private todoService: TodoService) { }

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodos),
            mergeMap(() => {
                console.log('TodoEffects: load todo');
                return this.todoService.getTodos().pipe(
                    map((todos) => setTodos({ todos }))
                )
            })
        )
    );

}