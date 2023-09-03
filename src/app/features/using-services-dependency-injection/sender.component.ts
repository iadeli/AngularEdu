import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-sender',
  template: `
    <button (click)="sendMessage()">Send Message</button>
  `
})
export class SenderComponent {
  constructor(private messageService: MessageService) {}

  sendMessage(): void {
    this.messageService.sendMessage('Hello from Sender Component!');
  }
}