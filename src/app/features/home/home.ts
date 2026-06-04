import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  categories = signal([
    {
      title: 'HEADPHONES',
      thumbnailUrl: 'images/shared/desktop/image-category-thumbnail-headphones.png',
      link: 'headphones',
    },
    {
      title: 'SPEAKERS',
      thumbnailUrl: 'images/shared/desktop/image-category-thumbnail-speakers.png',
      link: 'speakers',
    },
    {
      title: 'EARPHONES',
      thumbnailUrl: 'images/shared/desktop/image-category-thumbnail-earphones.png',
      link: 'earphones',
    },
  ]);

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
