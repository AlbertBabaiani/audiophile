import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styleUrl: './categories.scss',
})
export class Categories {
  categories = signal([
    {
      title: 'HEADPHONES',
      thumbnailUrl: 'images/shared/desktop/image-category-thumbnail-headphones.png',
      link: '/headphones',
    },
    {
      title: 'SPEAKERS',
      thumbnailUrl: 'images/shared/desktop/image-category-thumbnail-speakers.png',
      link: '/speakers',
    },
    {
      title: 'EARPHONES',
      thumbnailUrl: 'images/shared/desktop/image-category-thumbnail-earphones.png',
      link: '/earphones',
    },
  ]);
}
