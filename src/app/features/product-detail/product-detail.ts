import { CurrencyPipe, Location } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { Products } from '../../core/services/products';
import { SuggestedProducts } from '../../shared/ui/suggested-products/suggested-products';

@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, SuggestedProducts],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private readonly location = inject(Location);
  private productsService = inject(Products);

  slug = input.required<string>();

  product = computed(() => this.productsService.getProductsBySlug(this.slug())());

  currentQuantity = signal(1);

  goBack(): void {
    this.location.back();
  }

  incrementQuantity() {
    const max = this.product()?.quantity || 1;
    if (this.currentQuantity() < max) {
      this.currentQuantity.update((val) => val + 1);
    }
  }

  decrementQuantity() {
    if (this.currentQuantity() > 1) {
      this.currentQuantity.update((val) => val - 1);
    }
  }
}
