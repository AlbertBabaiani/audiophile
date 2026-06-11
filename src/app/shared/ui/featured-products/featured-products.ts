import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeadphonesModel } from '../../../core/models/headphones-model';

@Component({
  selector: 'app-featured-products',
  imports: [RouterLink],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss',
})
export class FeaturedProducts {
  products = input.required<HeadphonesModel[]>();
}
