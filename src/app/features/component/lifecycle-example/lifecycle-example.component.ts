import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle-example',
    template: `
    <h1>Understanding the Component Lifecycle</h1>
    <h2>{{ counter }}</h2>
    <button (click)="incrementCounter()">Increment</button>
    <hr />
  `,
    styles: [`
    h1 { color: darkblue; }
  `]
})
export class LifecycleExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() inputValue!: number;
    counter: number = 0;

    constructor() {
        console.log('Constructor called');
    }

    // هنگامی که مقادیر ورودی تغییر می‌کنند اجرا می شود 
    ngOnChanges(simpleChanges: SimpleChanges) {
        console.log('ngOnChanges called', simpleChanges);
    }

    // در زمان ایجاد کامپوننت و پس از تنظیم ورودی‌ها اجرا می شود 
    ngOnInit() {
        console.log('ngOnInit called');
    }

    // در زمانی که تغییراتی در کامپوننت یا ورودی‌ها رخ می‌دهد و انگولار نیاز دارد تغییرات را بررسی کند اجرا می شود
    ngDoCheck() {
        console.log('ngDoCheck called');
    }

    // پس از افزوده شدن محتوا به کامپوننت اجرا می شود 
    ngAfterContentInit() {
        console.log('ngAfterContentInit called');
    }

    // پس از بررسی تغییراتی که در محتوا رخ می‌دهد اجرا می شود
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called');
    }

    // پس از مشاهده‌ی محتوا در کامپوننت اجرا می شود 
    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
    }

    // پس از بررسی تغییراتی که در مشاهده‌ی محتوا رخ می‌دهد اجرا می شود 
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called');
    }

    // در زمان حذف کامپوننت اجرا می شود
    ngOnDestroy() {
        console.log('ngOnDestroy called');
    }

    incrementCounter() {
        this.counter++;
    }
}