import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { TodoFacade } from './store/todo.facade';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './component/todo.component';
import { TodoService } from './service/todo.service';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './store/todo.reducer';


@NgModule({
    declarations:[TodoComponent],
    imports: [
        CommonModule,
        FormsModule,

        StoreModule.forFeature('todos', TodoReducer),
        EffectsModule.forFeature([TodoEffects]),
    ],
    providers: [TodoFacade, TodoService]
})
export class TodoModule { }