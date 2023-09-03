import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor(){ console.log('LoggingServices') }
  log(message: string): void {
    console.log(message);
  }
}