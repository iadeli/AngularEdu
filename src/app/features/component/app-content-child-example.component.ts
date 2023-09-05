import { Component, ContentChild, AfterContentInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-content-child-example',
    template: `
    <ng-content></ng-content>
    <hr />
    `,
    styles: [`
    h1 { color: darkblue; }
   `]
})
export class ContentChildExampleComponent implements AfterContentInit {
    // بنابراین، با استفاده از  `استاتیک: فالس`  می‌توانیم به طور دینامیک المان‌های تمپلیت را در کامپوننت‌ها تعیین کرده و به آن‌ها دسترسی پیدا کنیم.
    @ContentChild('contentParagraph', { static: false }) contentParagraph!: ElementRef;

    ngAfterContentInit() {
        console.log('Content Child:', this.contentParagraph.nativeElement.textContent);
    }
}