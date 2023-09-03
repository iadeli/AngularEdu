import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject = new Subject<string>();
  public message$ = this.messageSubject.asObservable();

  messageEmitter = new EventEmitter<string>();

  sendMessage(message: string): void {
    // this.messageSubject.next(message);
    this.messageEmitter.emit(message);
  }
}