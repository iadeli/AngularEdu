import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, Subscription, interval, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  subscription!: Subscription;
  data!: string;
  value$ = new BehaviorSubject<string>('Initial value');

  constructor() { }

  ngOnInit(): void {
    // // آبزرویبل تابعی است که می تواند جریانی از مقادیر را به صورت همزمان یا ناهمزمان به یک آبزرور در طول زمان برگرداند.
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
    //     if (count === 6) {
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

  updateValue() {
    this.value$.next('Updated value');
  }

  showDiff() {
    // Subject Example
    const subject = new Subject<number>();
    subject.subscribe(value => console.log('Subject:', value));
    setTimeout(() => {
      subject.subscribe(value => console.log('Subject:', value));
    }, 3000);
    subject.next(1);
    subject.next(2);

    // BehaviorSubject Example
    const behaviorSubject = new BehaviorSubject<number>(0);
    behaviorSubject.subscribe(value => console.log('BehaviorSubject:', value));
    setTimeout(() => {
      behaviorSubject.subscribe(value => console.log('BehaviorSubject another sub:', value));
    }, 3000);
    behaviorSubject.next(1);
    behaviorSubject.next(2);

    // ReplaySubject Example
    const replaySubject = new ReplaySubject<number>(2);
    replaySubject.subscribe(value => console.log('ReplaySubject:', value));
    setTimeout(() => {
      replaySubject.subscribe(value => console.log('ReplaySubject another sub:', value));
    }, 3000);
    replaySubject.next(1);
    replaySubject.next(2);
    replaySubject.next(3);

    // AsyncSubject Example
    const asyncSubject = new AsyncSubject<number>();
    asyncSubject.subscribe(value => console.log('AsyncSubject:', value));
    setTimeout(() => {
      asyncSubject.subscribe(value => console.log('AsyncSubject another sub:', value));
    }, 3000);
    asyncSubject.next(1);
    asyncSubject.next(2);
    asyncSubject.complete();
  }

  ngOnDestroy(): void {
    if (this.subscription)
      this.subscription.unsubscribe();
  }

}