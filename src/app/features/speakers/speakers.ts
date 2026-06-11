import { Component, signal } from '@angular/core';
import { FeaturedProducts } from '../../shared/ui/featured-products/featured-products';
import { Categories } from '../../shared/ui/categories/categories';
import { ProductModel } from '../../core/models/models';

@Component({
  selector: 'app-speakers',
  imports: [FeaturedProducts, Categories],
  templateUrl: './speakers.html',
  styleUrl: './speakers.scss',
})
export class Speakers {
  speakers = signal<ProductModel[]>([
    {
      id: 'zx9',
      slug: 'zx9-speaker',
      name: 'ZX9 SPEAKER',
      category: 'speakers',
      description:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      isNew: true,
      price: 4500,
      features: "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
      includes: [
        { quantity: 2, item: 'Speaker unit' },
        { quantity: 2, item: 'Speaker cloth panel' },
        { quantity: 1, item: 'User manual' },
        { quantity: 1, item: '3.5mm 10m audio cable' },
        { quantity: 1, item: '10m optical cable' }
      ],
      quantity: 1,
      categoryImage: {
        mobile: 'images/speakers/product-zx9-speaker/mobile/image-category-page-preview.jpg',
        tablet: 'images/speakers/product-zx9-speaker/tablet/image-category-page-preview.jpg',
        desktop: 'images/speakers/product-zx9-speaker/desktop/image-category-page-preview.jpg'
      },
      image: {
        mobile: 'images/speakers/product-zx9-speaker/mobile/image-category-page-preview.jpg',
        tablet: 'images/speakers/product-zx9-speaker/tablet/image-category-page-preview.jpg',
        desktop: 'images/speakers/product-zx9-speaker/desktop/image-category-page-preview.jpg'
      }
    },
    {
      id: 'zx7',
      slug: 'zx7-speaker',
      name: 'ZX7 SPEAKER',
      category: 'speakers',
      description:
        'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      isNew: false,
      price: 3500,
      features: "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      includes: [
        { quantity: 2, item: 'Speaker unit' },
        { quantity: 2, item: 'Speaker cloth panel' },
        { quantity: 1, item: 'User manual' },
        { quantity: 1, item: '3.5mm 7.5m audio cable' },
        { quantity: 1, item: '7.5m optical cable' }
      ],
      quantity: 1,
      categoryImage: {
        mobile: 'images/speakers/product-zx7-speaker/mobile/image-category-page-preview.jpg',
        tablet: 'images/speakers/product-zx7-speaker/tablet/image-category-page-preview.jpg',
        desktop: 'images/speakers/product-zx7-speaker/desktop/image-category-page-preview.jpg'
      },
      image: {
        mobile: 'images/speakers/product-zx7-speaker/mobile/image-category-page-preview.jpg',
        tablet: 'images/speakers/product-zx7-speaker/tablet/image-category-page-preview.jpg',
        desktop: 'images/speakers/product-zx7-speaker/desktop/image-category-page-preview.jpg'
      }
    }
  ]);
}
