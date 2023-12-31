import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(
    // المنت رف راهی برای تعامل مستقیم با دام فراهم می کند، مانند اصلاح ویژگی های عنصر، افزودن یا حذف کلاس ها، یا گوش دادن به رویدادهای دام
    private el: ElementRef,
    // رندرر2 یک کلاس در فریمورک انگولار است که برای انجام عملیات مربوط به دام به صورت (کراس-براوزر) استفاده می‌شود.
    // رندرر2 از جایگزینی بهتر و ایمن‌تر برای دسترسی مستقیم به المان‌های دام با استفاده از المنت رف استفاده می‌کند.
    //با استفاده از رندرر2 می‌توانید عملیاتی مانند ایجاد المان، حذف المان، تغییر محتوا یا ویژگی‌های المان، افزودن یا حذف کلاس‌ها، ایجاد رویدادها و غیره را روی المان‌های دام انجام دهید.
    private renderer: Renderer2
  ) { }

  // هاست لیسینر یک دکوراتور در فریمورک انگولار است که برای گوش دادن به رویدادهای مرتبط با المان‌های دام استفاده می‌شود.
  // با استفاده از این دکوراتور، می‌توانید رویدادهای مربوط به کلیدهای صفحه کلید، موس، تغییر اندازه صفحه و ... را شناسایی کنید و به صورت دینامیک بر روی آن‌ها واکنش نشان دهید.
  // این دکوراتور معمولاً در کامپوننت‌ها استفاده می‌شود و با استفاده از آن می‌توانید واکنش‌هایی را برای المان‌های دام تعریف کنید.
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}