export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  ingredients: string[];
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isSpicy: boolean;
  preparationTime: number; // em minutos
  rating: number;
  reviews: number;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface Reservation {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
  };
  total: number;
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  orderType: 'dine-in' | 'takeaway';
  tableNumber?: number;
  createdAt: string;
  estimatedTime: number; // em minutos
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  menuItemId?: string;
}

export interface RestaurantInfo {
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    [key: string]: { open: string; close: string; closed?: boolean };
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}
