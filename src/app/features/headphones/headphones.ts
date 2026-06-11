import { Component } from '@angular/core';
import { Categories } from '../../shared/ui/categories/categories';

@Component({
  selector: 'app-headphones',
  imports: [Categories],
  templateUrl: './headphones.html',
  styleUrl: './headphones.scss',
})
export class Headphones {}
