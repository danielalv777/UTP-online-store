import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../features/store/types/store';

type CartStore = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

const sessionStorageAdapter = {
  getItem: (name: string) => {
    const item = sessionStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: unknown) => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    sessionStorage.removeItem(name);
  },
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],

      addProduct: (product) => {
        const exists = get().products.some((p) => p.id === product.id);
        if (!exists) {
          set({ products: [...get().products, product] });
        }
      },

      removeProduct: (id) => {
        set({ products: get().products.filter((p) => p.id !== id) });
      },

      clearCart: () => set({ products: [] }),

      totalItems: () => get().products.length,
      totalPrice: () => get().products.reduce((sum, p) => sum + p.price, 0),
    }),
    {
      name: 'cart-storage',
      storage: sessionStorageAdapter,
    }
  )
);
