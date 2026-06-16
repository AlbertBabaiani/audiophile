import { Component, inject } from '@angular/core';
import { Categories } from '../../shared/ui/categories/categories';
import { FeaturedProducts } from '../../shared/ui/featured-products/featured-products';
import { Products } from '../../core/services/products';

@Component({
  selector: 'app-earphones',
  imports: [Categories, FeaturedProducts],
  templateUrl: './earphones.html',
  styleUrl: './earphones.scss',
})
export class Earphones {
  private productsSevice = inject(Products);

  earphones = this.productsSevice.earphones;
}
