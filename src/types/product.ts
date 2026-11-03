export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number; // in cents, e.g. 149990 = R$ 1.499,90
}

export interface ApiResponse {
  success: boolean;
  products: Product[];
}

export type CategoryTab =
  | 'CELULAR'
  | 'ACESSÓRIOS'
  | 'TABLETS'
  | 'NOTEBOOKS'
  | 'TVS'
  | 'VER TODOS';

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  active?: boolean;
}

