import { Component, computed, inject, input } from '@angular/core';
import { Products } from '../../../core/services/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suggested-products',
  imports: [RouterLink],
  templateUrl: './suggested-products.html',
  styleUrl: './suggested-products.scss',
})
export class SuggestedProducts {
  currentProductSlug = input<string>();

  private productsService = inject(Products);

  suggestedProducts = computed(() => {
    return this.productsService.getSuggestedProducts(this.currentProductSlug())();
  });
}
