import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../store/todo.entity';
import { TodoFacade } from '../store/todo.facade';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [`
  .completed {
      text-decoration: line-through;
    }
  `]
})
export class TodoComponent implements OnInit {
  newTodo!: string;
  todos$!: Observable<Todo[]>;

  constructor(private todoFacade: TodoFacade) { }

  ngOnInit() {
    this.todoFacade.loadTodos();
    this.todos$ = this.todoFacade.getTodos();
  }

  addTodo(title: string) {
    const todo: Todo = {
      id: Math.random().toString(),
      title: title,
      completed: false
    };
    this.todoFacade.addTodo(todo);
  }

  deleteTodo(id: string) {
    this.todoFacade.deleteTodo(id);
  }

  updateTodoStatus(todo: Todo) {
    const updatedTodo: Todo = { ...todo, completed: !todo.completed };
    this.todoFacade.updateTodoStatus(updatedTodo);
  }
}