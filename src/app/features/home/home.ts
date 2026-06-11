import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Categories } from '../../shared/ui/categories/categories';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Categories],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  heroProduct = signal({
    title: 'XX99 Mark II HeadphoneS',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    link: 'earphones/xx99',

    thumbnailUrls: {
      mobile: 'images/home/mobile/image-header.jpg',
      tablet: 'images/home/tablet/image-header.jpg',
      desktop: 'images/home/desktop/image-hero.jpg',
    },
  });

  featuredProducts = signal({
    zx9: {
      title: `ZX9 SPEAKER`,
      description:
        'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
      thumbnailUrls: {
        mobile: 'images/home/mobile/image-speaker-zx9.png',
        tablet: 'images/home/tablet/image-speaker-zx9.png',
        desktop: 'images/home/desktop/image-speaker-zx9.png',
      },
      link: '/speakers/zx9',
    },
    zx7: {
      title: `ZX7 SPEAKER`,
      thumbnailUrls: {
        mobile: 'images/home/mobile/image-speaker-zx7.jpg',
        tablet: 'images/home/tablet/image-speaker-zx7.jpg',
        desktop: 'images/home/desktop/image-speaker-zx7.jpg',
      },
      link: '/speakers/zx7',
    },
    yx1: {
      title: `YX1 EARPHONES`,
      thumbnailUrls: {
        mobile: 'images/home/mobile/image-earphones-yx1.jpg',
        tablet: 'images/home/tablet/image-earphones-yx1.jpg',
        desktop: 'images/home/desktop/image-earphones-yx1.jpg',
      },
      link: '/earphones/yx1',
    },
  });
}
