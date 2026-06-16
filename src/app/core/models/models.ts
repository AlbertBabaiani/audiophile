export interface ProductModel {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryImage: CategoryImage;
  image: CategoryImage;
  description: string;
  isNew: boolean;
  features: string;
  includes: {
    item: string;
    quantity: number;
  }[];
  price: number;
  quantity: number;
  discount: number;
}

interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}
