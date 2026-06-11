export interface HeadphonesModel {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryImage: CategoryImage;
  image: CategoryImage;
  description: string;
  isNew: boolean;
}

interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}
