export interface MenuItem {
  menu_id: number;
  menu_name_en: string;
  menu_name_th: string;
  price: number;
  category: number;
  status: boolean;
  image: string;
}

export interface MenuCategory {
  category: number;
  category_en: string;
  category_th: string;
}

export interface Order {
  order: OrderItem[];
}

export interface OrderItem {
  menu_id: number;
  menu_name_th: string;
  menu_name_en: string;
  price: number;
  category: number;
  status: boolean;
  image: string;
  quantity: number;
}
