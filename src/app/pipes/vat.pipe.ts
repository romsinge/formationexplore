import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat',
})
export class VatPipe implements PipeTransform {
  transform(value?: number): number {
    return value ? value * 1.2 : 0;
  }
}
