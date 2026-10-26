import { useSyncExternalStore } from 'react';

export type CartItem = {
  productId: string;
  quantity: number;
};

let cartItems: CartItem[] = [];
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

const getSnapshot = () => cartItems;

const notify = () => {
  listeners.forEach((listener) => listener());
};

export const useCart = () => {
  const items = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const addItem = (productId: string) => {
    const existingItem = cartItems.find((item) => item.productId === productId);
    cartItems = existingItem
      ? cartItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...cartItems, { productId, quantity: 1 }];
    notify();
  };

  const removeItem = (productId: string) => {
    cartItems = cartItems.filter((item) => item.productId !== productId);
    notify();
  };

  return { items, addItem, removeItem };
};
