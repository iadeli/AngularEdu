import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomColor]'
})
export class CustomColorDirective {
  @Input() appCustomColor!: string;

  // در فریمورک انگولار، هاست بایندینگ یک دکوراتور است که برای اتصال ویژگی های یک کامپوننت به یک المان دام استفاده می شود.
  // با هاست بایندینگ، می‌توان از ویژگی‌هایی مانند مقدار کلاس، سبک، ویژگی و ... استفاده کرد.
  // به این ترتیب، تغییراتی که در ویژگی‌های اعمال می‌شوند، به صورت خودکار در المان دام نشان داده می‌شود. 
  @HostBinding('style.color') get textColor() {
    return this.appCustomColor;
  }
}