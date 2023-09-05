import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {
  constructor(
    // تمپلیت رف یک کلاس در فریمورک انگولار است که برای ارجاع به المان‌های تمپلیت در کامپوننت‌ها استفاده می‌شود
    private templateRef: TemplateRef<any>,
    // ویوکانتینر رف یک کلاس در فریمورک انگولار است که برای مدیریت و ایجاد داینامیک المان‌های دام استفاده می‌شود.
    // با استفاده از ویوکانتینررف، می‌توانید المان‌های دام را به صورت دینامیک ایجاد، حذف و تغییر دهید.
    // این کلاس معمولاً در کامپوننت‌ها استفاده می‌شود و با استفاده از آن می‌توانید کامپوننت‌ها و المان‌های قالب را به صورت دینامیک ایجاد و مدیریت کنید.
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appCustomIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}