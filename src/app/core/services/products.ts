import { computed, Injectable, signal } from '@angular/core';
import { ProductModel } from '../models/models';
import productsData from '../../../assets/data.json';

const allProductsData: ProductModel[] = (productsData as any[]).map((item) => ({
  id: String(item.id),
  slug: item.slug,
  name: item.name,
  category: item.category,
  categoryImage: item.categoryImage,
  image: item.image,
  description: item.description,
  isNew: item.new,
  features: item.features,
  includes: item.includes,
  price: item.price,
  quantity: item.quantity ?? 1,
  discount: item.discount ?? 0,
}));

@Injectable({
  providedIn: 'root',
})
export class Products {
  headphones = signal<ProductModel[]>(allProductsData.filter((p) => p.category === 'headphones'));
  speakers = signal<ProductModel[]>(allProductsData.filter((p) => p.category === 'speakers'));
  earphones = signal<ProductModel[]>(allProductsData.filter((p) => p.category === 'earphones'));

  allProducts = computed(() => [...this.headphones(), ...this.speakers(), ...this.earphones()]);
}
