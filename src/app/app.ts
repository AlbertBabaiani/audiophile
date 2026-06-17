import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUs } from './shared/ui/about-us/about-us';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutUs, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('audiophile');
}
