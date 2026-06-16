import { Component, inject } from '@angular/core';
import { FeaturedProducts } from '../../shared/ui/featured-products/featured-products';
import { Categories } from '../../shared/ui/categories/categories';
import { Products } from '../../core/services/products';

@Component({
  selector: 'app-speakers',
  imports: [FeaturedProducts, Categories],
  templateUrl: './speakers.html',
  styleUrl: './speakers.scss',
})
export class Speakers {
  private productsSevice = inject(Products);

  speakers = this.productsSevice.speakers;
}
