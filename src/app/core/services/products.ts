import { computed, inject, Injectable, signal } from '@angular/core';
import { collection, getDocs } from 'firebase/firestore';
import { FIREBASE_DB } from './firebase';
import { ProductModel } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private db = inject(FIREBASE_DB);

  headphones = signal<ProductModel[]>([]);
  speakers = signal<ProductModel[]>([]);
  earphones = signal<ProductModel[]>([]);

  allProducts = computed(() => [...this.headphones(), ...this.speakers(), ...this.earphones()]);

  constructor() {
    this.fetchProducts();
  }

  async fetchProducts(): Promise<void> {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'products'));
      const products: ProductModel[] = [];
      querySnapshot.forEach((doc) => {
        products.push(doc.data() as ProductModel);
      });

      this.headphones.set(products.filter((p) => p.category === 'headphones'));
      this.speakers.set(products.filter((p) => p.category === 'speakers'));
      this.earphones.set(products.filter((p) => p.category === 'earphones'));
    } catch (error) {
      console.error('Error fetching products from Firestore:', error);
    }
  }
}
