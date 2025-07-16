// src/components/cart/CartSidebar.tsx
'use client';

import { X, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  items: { id: number; name: string; quantity: number; price: number }[];
};

export const CartSidebar = ({ open, onClose, items }: Props) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  return (
    <>
      {/* Fondo oscuro */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 z-40 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-bold text-[hsl(var(--color-primary))] flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Tu Carrito
          </h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-black transition" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Tu carrito está vacío.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <p className="font-semibold text-[hsl(var(--color-primary))]">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
