import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any[];

  constructor(private loggingService: LoggingService) {
    this.data = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
  }

  getAllData(): any[] {
    this.loggingService.log('This is a log message. --- Get all data...');
    return this.data;
  }

  getDataById(id: number): any {
    return this.data.find(item => item.id === id);
  }

  addData(item: any): void {
    this.data.push(item);
  }

  updateData(id: number, updatedItem: any): void {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data[index] = { ...this.data[index], ...updatedItem };
    }
  }

  deleteData(id: number): void {
    this.data = this.data.filter(item => item.id !== id);
  }
}