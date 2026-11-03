export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number; // valor numérico do preço do produto vindo do JSON (ex: 15000 -> R$ 15.000,00)
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

