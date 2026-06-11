import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUs } from './shared/ui/about-us/about-us';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('audiophile');
}
