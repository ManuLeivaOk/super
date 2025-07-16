"use client";
import { ButtonLoader } from "@/components/common/ButtonLoader";
import { Loader } from "@/components/common/Loader";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { ProductCard } from "@/components/common/ProductCard";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const agregarAlCarrito = () => {
    console.log("agregado");
  };

  const productos = [
    {
      id: 1,
      nombre: "Aceite de Girasol 1L",
      codigo: "ALIM-001",
      precio: 950.0,
      imagenUrl: "/product.png",
    },
    {
      id: 2,
      nombre: "Detergente Limón 750ml",
      codigo: "LIMP-002",
      precio: 620.5,
      imagenUrl: "/product.png",
    },
    {
      id: 3,
      nombre: "Yerba Mate 1kg",
      codigo: "ALIM-003",
      precio: 1200.0,
      imagenUrl: "/product.png",
    },
    {
      id: 4,
      nombre: "Papel Higiénico x4",
      codigo: "HOG-004",
      precio: 800.0,
      imagenUrl: "/product.png",
    },
  ];

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:p-4">
          {productos.map((producto) => (
            <ProductCard
              id={producto.id}
              title={producto.nombre}
              code={producto.codigo}
              price={producto.precio}
              imageUrl={producto.imagenUrl}
              onAddToCart={(id, qty) =>
                console.log(`Producto ${id} ahora tiene ${qty} en el carrito`)
              }
            />
          ))}
        </div>
      </main>
    </div>
  );
}
