import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
    transform(value: number, unit: string): number {
        if (unit === 'Celsius') {
            return (value * 9 / 5) + 32;
        } else if (unit === 'Fahrenheit') {
            return (value - 32) * 5 / 9;
        } else {
            return value;
        }
    }
}