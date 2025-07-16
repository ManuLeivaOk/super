'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Props = {
  categorias: string[];
  selectedCategoria: string;
  onCategoriaChange: (categoria: string) => void;
  orden: string;
  onOrdenChange: (orden: string) => void;
};

export const FilterBar = ({
  categorias,
  selectedCategoria,
  onCategoriaChange,
  orden,
  onOrdenChange,
}: Props) => {
  const ordenes = [
    { label: 'Precio ascendente', value: 'precio-asc' },
    { label: 'Precio descendente', value: 'precio-desc' },
    { label: 'Nombre A-Z', value: 'nombre-asc' },
    { label: 'Nombre Z-A', value: 'nombre-desc' },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Filtro por categoría */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-600">Categoría:</label>
        <select
          value={selectedCategoria}
          onChange={(e) => onCategoriaChange(e.target.value)}
          className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
        >
          <option value="">Todas</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Ordenamiento */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-600">Ordenar por:</label>
        <select
          value={orden}
          onChange={(e) => onOrdenChange(e.target.value)}
          className="bg-white border border-gray-300 rounded-xl px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))]"
        >
          {ordenes.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
