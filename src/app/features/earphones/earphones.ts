import { Component, signal } from '@angular/core';
import { Categories } from '../../shared/ui/categories/categories';
import { FeaturedProducts } from '../../shared/ui/featured-products/featured-products';
import { ProductModel } from '../../core/models/models';

@Component({
  selector: 'app-earphones',
  imports: [Categories, FeaturedProducts],
  templateUrl: './earphones.html',
  styleUrl: './earphones.scss',
})
export class Earphones {
  earphones = signal<ProductModel[]>([
    {
      id: 'yx1',
      slug: 'yx1-earphones',
      name: 'YX1 WIRELESS EARPHONES',
      category: 'earphones',
      description:
        'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      isNew: true,
      price: 599,
      features: "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
      includes: [
        { quantity: 2, item: 'Earphone unit' },
        { quantity: 6, item: 'Multi-size earplugs' },
        { quantity: 1, item: 'User manual' },
        { quantity: 1, item: 'USB-C charging cable' },
        { quantity: 1, item: 'Travel pouch' }
      ],
      quantity: 1,
      categoryImage: {
        mobile: 'images/earphones/product-yx1-earphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/earphones/product-yx1-earphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/earphones/product-yx1-earphones/desktop/image-category-page-preview.jpg'
      },
      image: {
        mobile: 'images/earphones/product-yx1-earphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/earphones/product-yx1-earphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/earphones/product-yx1-earphones/desktop/image-category-page-preview.jpg'
      }
    }
  ]);
}
