import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from './contact.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<ContactComponent> {
    canDeactivate(component: ContactComponent): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}