export interface MenuItem {
  menu_id: number;
  menu_name_en: string;
  menu_name_th: string;
  price: number;
  category: number;
  status: boolean;
  image: string;
}

export interface CartItem {
  menu_id: number;
  qty: number;
}
