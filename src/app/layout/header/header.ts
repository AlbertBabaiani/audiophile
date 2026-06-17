import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header[app-header]',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'void',
        style({
          height: '0px',
          opacity: 0,
          paddingTop: '0px',
          paddingBottom: '0px',
          overflow: 'hidden',
        }),
      ),
      state(
        '*',
        style({
          height: '*',
          opacity: 1,
          paddingTop: '*',
          paddingBottom: '*',
          overflow: 'hidden',
        }),
      ),
      transition('void <=> *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class Header {
  private elementRef = inject(ElementRef);

  navbarOpened = signal(false);

  toggleNavbar() {
    this.navbarOpened.set(!this.navbarOpened());
  }

  closeNavbar() {
    this.navbarOpened.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.navbarOpened()) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.navbarOpened.set(false);
    }
  }
}
