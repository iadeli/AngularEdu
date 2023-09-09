import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  template: `
    <h1>Welcome to the Home Page</h1>
    <nav>
      <a [routerLink]="['/about']" [queryParams]="{ id: 1 }" fragment="section1">go to About</a><br />
      <button (click)="goToAbout()">go to about programmatically</button>
    </nav>
    `
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription!: Subscription;
  data!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // آبزرویبل تابعی است که می تواند جریانی از مقادیر را به صورت همزمان یا ناهمزمان به یک آبزرور در طول زمان برگرداند.
    // this.subscription = interval(1000).subscribe(observer => {
    //   // آبزرور شی ای است که اعلان ها را از آبزرویبل دریافت می کند.
    //   console.log(observer);
    // })


    // const myObservable = new Observable<string>(observer => {
    //   observer.next('Hello,');
    //   observer.next('Custom Observable!');
    //   observer.complete();
    // });

    // myObservable.subscribe({
    //   next: (value) => {
    //     this.data = this.data ? this.data + ' ' + value : value;
    //     console.log(this.data);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    //   complete: () => {
    //     console.log('Observable completed');
    //   }
    // });

    // const customInterval = new Observable<number>(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     if (count === 5) {
    //       observer.complete();
    //     }
    //     if (count > 3) {
    //       observer.error(new Error('count is greater than 3!'));
    //     }
    //     count++;
    //   }, 1000);
    // });

    // customInterval.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (error) => {
    //     console.log(error.message);
    //   },
    //   complete: () => {
    //     console.log('completed!');
    //   }
    // })

    // const myObservable = of(1, 2, 3, 4, 5);

    // myObservable.pipe(
    //   filter(value => value % 2 === 0),
    //   map(value => value * 2),
    //   tap(value => console.log('Processing value:', value))
    // ).subscribe({
    //   next: (value) => {
    //     this.data = value.toString();
    //   },
    //   error: (error) => {
    //     console.error(error);
    //     this.data = 'Error: ' + error;
    //   },
    //   complete: () => {
    //     console.log('Observable completed');
    //     this.data += ' (completed)';
    //   }
    // });


    // // Create a new subject
    // const subject = new Subject<number>();

    // // Subscribe to the subject
    // const subscription = subject.subscribe((data) => {
    //   console.log('Received data:', data);
    // });

    // // Emit values to the subject
    // subject.next(1); // Output: Received data: 1
    // subject.next(2); // Output: Received data: 2
    // subject.next(3); // Output: Received data: 3

    // // Unsubscribe from the subject
    // subscription.unsubscribe();
  }

  goToAbout() {
    const _id = 1;
    this.router.navigate(['/about'], { queryParams: { id: _id }, fragment: 'section1' })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}