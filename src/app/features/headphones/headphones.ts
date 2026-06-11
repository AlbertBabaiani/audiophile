import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Categories } from '../../shared/ui/categories/categories';

@Component({
  selector: 'app-headphones',
  imports: [Categories, RouterLink],
  templateUrl: './headphones.html',
  styleUrl: './headphones.scss',
})
export class Headphones {
  headphones = signal([
    {
      name: 'XX99 MARK II HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      isNew: true,
      link: '/products/xx99-mark-two',
      images: {
        mobile: 'images/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
      },
    },
    {
      name: 'XX99 MARK I HEADPHONES',
      description:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      isNew: false,
      link: '/products/xx99-mark-one',
      images: {
        mobile: 'images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
      },
    },
    {
      name: 'XX59 HEADPHONES',
      description:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      isNew: false,
      link: '/products/xx59',
      images: {
        mobile: 'images/product-xx59-headphones/mobile/image-category-page-preview.jpg',
        tablet: 'images/product-xx59-headphones/tablet/image-category-page-preview.jpg',
        desktop: 'images/product-xx59-headphones/desktop/image-category-page-preview.jpg',
      },
    },
  ]);
}
