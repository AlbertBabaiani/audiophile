import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
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
}
