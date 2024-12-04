import { OrderItem } from ".";

export interface GetOrdersHistory {
  id: string;
  user_id: number;
  table_id: number;
  table_visit: number;
  order_count: number;
  order_date: string;
  created_at: string;
  items: OrderItem[];
  total_price: number;
  order_status: number;
}
