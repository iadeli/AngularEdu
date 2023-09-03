import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'app-receiver',
    template: `
    <div>{{ receivedMessage }}</div>
  `
})
export class ReceiverComponent implements OnInit {
    receivedMessage!: string;

    constructor(private messageService: MessageService) { }

    ngOnInit(): void {
        // this.messageService.message$.subscribe(message => {
        //     this.receivedMessage = message;
        // });
        this.messageService.messageEmitter.subscribe(message => {
            this.receivedMessage = message;
        })
    }
}