import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductComponent } from './app/component/product-component/product-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent],
  template: `
    <app-product-component></app-product-component>`,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
