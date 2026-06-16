import { Component, inject } from '@angular/core';
import { Categories } from '../../shared/ui/categories/categories';
import { FeaturedProducts } from '../../shared/ui/featured-products/featured-products';
import { Products } from '../../core/services/products';

@Component({
  selector: 'app-headphones',
  imports: [Categories, FeaturedProducts],
  templateUrl: './headphones.html',
  styleUrl: './headphones.scss',
})
export class Headphones {
  private productsSevice = inject(Products);

  headphones = this.productsSevice.headphones;
}
