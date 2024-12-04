import { OrderItem } from ".";

export interface OrderPayload {
  user_id: number;
  table_id: number;
  table_visit: number;
  items: OrderItem[];
}

export interface GetOrdersPayload {
  id?: string;
  user_id?: number;
  table_id?: number;
  table_visit?: number;
  order_id?: number;
  date?: string;
  // order_date?: string;
}
