import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header[app-header]',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navbarOpened = signal(false);

  toggleNavbar() {
    this.navbarOpened.set(!this.navbarOpened());
  }
}
