"use client";

import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  code: string;
  price: number;
  imageUrl: string;
  onAddToCart?: (id: number, quantity: number) => void;
};

export const ProductCard = ({
  id,
  title,
  code,
  price,
  imageUrl,
  onAddToCart,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = async () => {
    setLoading(true);
    setTimeout(() => {
      setQuantity((q) => q + 1);
      onAddToCart?.(id, quantity + 1);
      setLoading(false);
    }, 600);
  };

  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    onAddToCart?.(id, newQty);
  };

  const handleDecrement = () => {
    const newQty = Math.max(0, quantity - 1);
    setQuantity(newQty);
    onAddToCart?.(id, newQty);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-300 hover:shadow-md transition-all pb-4 px-4 sm:py-4 flex flex-col h-full">
      {/* Imagen */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden sm:mb-3">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido dinámico */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">Código: {code}</p>
        <p className="text-lg font-bold text-[hsl(var(--color-primary))] mt-1">
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Acción */}
      <div className="mt-auto">
        {quantity === 0 ? (
          <button
            onClick={handleAdd}
            disabled={loading}
            className="w-full py-2 bg-[hsl(var(--color-primary))] text-white rounded-xl font-medium text-sm shadow hover:brightness-110 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              "Agregando..."
            ) : (
              <span className="flex justify-center items-center gap-2">
                <ShoppingCart className="w-4 h-4 hidden sm:block" />
                Agregar al carrito
              </span>
            )}
          </button>
        ) : (
          <div className="flex items-center justify-between border border-gray-300 rounded-xl overflow-hidden">
            <button
              onClick={handleDecrement}
              className="bg-gray-100 text-gray-800 px-3 py-3 hover:bg-gray-200 transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 font-medium text-sm text-gray-800">
              {quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="bg-[hsl(var(--color-primary))] text-white px-3 py-3 hover:brightness-110 transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
