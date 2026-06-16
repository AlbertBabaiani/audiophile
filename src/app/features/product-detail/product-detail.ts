import { CurrencyPipe, Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private readonly location = inject(Location);

  goBack(): void {
    this.location.back();
  }
}
