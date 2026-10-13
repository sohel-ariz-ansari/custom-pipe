import { Component } from '@angular/core';
import { DiscountComponentPipe } from '../discount-component/discount-component-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-component',
  imports: [CurrencyPipe, DiscountComponentPipe],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {}
