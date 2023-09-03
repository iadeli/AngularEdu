import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-lifecycle-template-example',
    template: `
    <h1 #pageTitle>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr />
    `,
    styles: [`
    h1 { color: darkblue; }
  `]
})
export class LifecycleTemplateExampleComponent implements OnInit, AfterViewInit {
    title: string = 'Lifecycle Hooks and Template Access Example';
    message: string = 'Initial message';

    @ViewChild('pageTitle', { static: false }) pageTitle!: ElementRef;

    ngOnInit() {
        console.log('ngOnInit called');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit called');
        console.log('Page Title:', this.pageTitle.nativeElement.textContent);
    }
}