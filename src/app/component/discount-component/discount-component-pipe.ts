import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true,
})
export class DiscountComponentPipe implements PipeTransform {
  transform(price: number): number {
    return price - (price * 10) / 100; // Bodmas rule is applied
  }
}
