import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Order, Reservation, MenuItem } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (menuItem: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

interface OrderStore {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

interface ReservationStore {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  updateReservationStatus: (reservationId: string, status: Reservation['status']) => void;
  getReservationsByDate: (date: string) => Reservation[];
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (menuItem, quantity = 1, specialInstructions) => {
        const existingItem = get().items.find(item => item.id === menuItem.id);
        
        if (existingItem) {
          set(state => ({
            items: state.items.map(item =>
              item.id === menuItem.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          }));
        } else {
          const newItem: CartItem = {
            id: menuItem.id,
            menuItem,
            quantity,
            specialInstructions
          };
          set(state => ({ items: [...state.items, newItem] }));
        }
      },
      removeItem: (itemId) => {
        set(state => ({
          items: state.items.filter(item => item.id !== itemId)
        }));
      },
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        
        set(state => ({
          items: state.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => 
          total + (item.menuItem.price * item.quantity), 0
        );
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useOrderStore = create<OrderStore>((set, get) => ({
  orders: [],
  addOrder: (order) => {
    set(state => ({ orders: [...state.orders, order] }));
  },
  updateOrderStatus: (orderId, status) => {
    set(state => ({
      orders: state.orders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    }));
  },
  getOrderById: (orderId) => {
    return get().orders.find(order => order.id === orderId);
  }
}));

export const useReservationStore = create<ReservationStore>((set, get) => ({
  reservations: [],
  addReservation: (reservation) => {
    set(state => ({ reservations: [...state.reservations, reservation] }));
  },
  updateReservationStatus: (reservationId, status) => {
    set(state => ({
      reservations: state.reservations.map(reservation =>
        reservation.id === reservationId ? { ...reservation, status } : reservation
      )
    }));
  },
  getReservationsByDate: (date) => {
    return get().reservations.filter(reservation => 
      reservation.date === date && reservation.status !== 'cancelled'
    );
  }
}));
