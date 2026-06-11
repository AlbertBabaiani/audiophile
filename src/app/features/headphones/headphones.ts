import { Component, signal } from '@angular/core';
import { Categories } from '../../shared/ui/categories/categories';
import { HeadphonesModel } from '../../core/models/headphones-model';
import { FeaturedProducts } from '../../shared/ui/featured-products/featured-products';

@Component({
  selector: 'app-headphones',
  imports: [Categories, FeaturedProducts],
  templateUrl: './headphones.html',
  styleUrl: './headphones.scss',
})
export class Headphones {
  headphones = signal<HeadphonesModel[]>([
    {
      id: 'xx99-mark-two',
      slug: 'xx99-mark-two-headphones',
      name: 'XX99 MARK II HEADPHONES',
      category: 'headphones',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      isNew: true,
      categoryImage: {
        mobile:
          'images/earphones/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
        tablet:
          'images/earphones/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
        desktop:
          'images/earphones/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
      },
      image: {
        mobile:
          'images/earphones/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
        tablet:
          'images/earphones/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
        desktop:
          'images/earphones/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
      },
    },
    {
      id: 'xx99-mark-one',
      slug: 'xx99-mark-one-headphones',
      name: 'XX99 MARK I HEADPHONES',
      category: 'headphones',
      description:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      isNew: false,
      categoryImage: {
        mobile:
          'images/earphones/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
        tablet:
          'images/earphones/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
        desktop:
          'images/earphones/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
      },
      image: {
        mobile:
          'images/earphones/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
        tablet:
          'images/earphones/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
        desktop:
          'images/earphones/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
      },
    },
    {
      id: 'xx59',
      slug: 'xx59-headphones',
      name: 'XX59 HEADPHONES',
      category: 'headphones',
      description:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      isNew: false,
      categoryImage: {
        mobile: 'images/earphones/product-xx59-headphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/earphones/product-xx59-headphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/earphones/product-xx59-headphones/desktop/image-category-page-preview.jpg',
      },
      image: {
        mobile: 'images/earphones/product-xx59-headphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/earphones/product-xx59-headphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/earphones/product-xx59-headphones/desktop/image-category-page-preview.jpg',
      },
    },
  ]);
}
