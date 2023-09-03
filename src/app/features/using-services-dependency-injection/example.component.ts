import { Component } from '@angular/core';
import { LoggingService } from './logging.service';
import { DataService } from './data.service';

@Component({
    selector: 'app-example',
    template: `
    <button (click)="logMessage()">Log Message</button>
    <hr />
    <button (click)="printData()">Print Data</button>
  `
})
export class ExampleComponent {
    constructor(
        private loggingService: LoggingService,
        private dataService: DataService
    ) { }

    logMessage(): void {
        this.loggingService.log('This is a log message.');
    }

    printData(): void {
        const data = this.dataService.getAllData();
        console.log('data', data);
    }
}