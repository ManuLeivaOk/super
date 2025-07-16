"use client";
import { ProductCard } from "@/components/common/ProductCard";
import { FilterBar } from "@/components/home/FIlterBar";
import { useMemo, useState } from 'react';

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

export default function Home() {
  const categorias = ['Alimentos', 'Limpieza', 'Hogar'];

  const [categoria, setCategoria] = useState('');
  const [orden, setOrden] = useState('');

  const productosFiltrados = useMemo(() => {
    let filtrados = [...productos];

    if (categoria) {
      filtrados = filtrados.filter((p) => p.categoria === categoria);
    }

    switch (orden) {
      case 'precio-asc':
        filtrados.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio-desc':
        filtrados.sort((a, b) => b.precio - a.precio);
        break;
      case 'nombre-asc':
        filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'nombre-desc':
        filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
    }

    return filtrados;
  }, [categoria, orden]);



  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Productos</h1>

      <FilterBar
        categorias={categorias}
        selectedCategoria={categoria}
        onCategoriaChange={setCategoria}
        orden={orden}
        onOrdenChange={setOrden}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            title={producto.nombre}
            code={producto.codigo}
            price={producto.precio}
            imageUrl={producto.imagenUrl}
            onAddToCart={() => console.log(producto.nombre)}
          />
        ))}
      </div>
    </section>
  );
}
