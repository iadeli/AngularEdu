import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  currentDate: Date = new Date();
  temperature: number = 25;
  searchText!: string;
  items: string[] = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Strawberry',
    'Grapes'
  ];
  data$: Observable<number>;

  constructor() {
    this.data$ = interval(1000);
  }

  ngOnInit(): void {
  }

  addFruit() {
    this.items.push('Apricot');
  }

}