import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'footer[app-footer]',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  navigation = signal([
    { title: 'HOME', path: '/' },
    { title: 'HEADPHONES', path: '/headphones' },
    { title: 'SPEAKERS', path: '/speakers' },
    { title: 'EARPHONES', path: '/earphones' },
  ]);

  socialLinks = signal([
    {
      link: 'images/shared/desktop/icon-facebook.svg',
      title: 'Facebook',
    },
    {
      link: 'images/shared/desktop/icon-twitter.svg',
      title: 'Twitter',
    },
    {
      link: 'images/shared/desktop/icon-instagram.svg',
      title: 'Instagram',
    },
  ]);
}
