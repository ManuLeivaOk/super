"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, LogOut, UserCircle } from "lucide-react";
import { CartSidebar } from "./CartSidebar";
import { useAuth } from "@/context/AuthContext";

export const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  const cartItems = [
    { id: 1, name: "Fideos", quantity: 2, price: 350 },
    { id: 2, name: "Jabón", quantity: 1, price: 200 },
  ];

  return (
    <>
      <header className="w-full bg-white shadow-sm border-b-gray-500 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-[hsl(var(--color-primary))]"
          >
            Supermercado
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-[hsl(var(--color-primary))] transition"
            >
              Inicio
            </Link>
            <Link
              href="/categorias"
              className="text-gray-700 hover:text-[hsl(var(--color-primary))] transition"
            >
              Categorías
            </Link>
            <Link
              href="/ofertas"
              className="text-gray-700 hover:text-[hsl(var(--color-primary))] transition"
            >
              Ofertas
            </Link>
            <Link
              href="/contacto"
              className="text-gray-700 hover:text-[hsl(var(--color-primary))] transition"
            >
              Contacto
            </Link>
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-4">
            {/* Carrito */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[hsl(var(--color-primary))] text-white hover:brightness-110 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-[hsl(var(--color-secondary))] text-white px-1.5 py-[1px] rounded-full font-bold shadow-sm">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* Usuario o login */}
            {user ? (
              <button
                title="Cerrar sesión"
                onClick={() => console.log("logout")}
                className="w-10 h-10 rounded-full hover:bg-gray-100 transition text-gray-600 hidden md:flex items-center justify-center "
              >
                <LogOut className="w-5 h-5" />
              </button>
            ) : (
              <Link
                href="/login"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition text-gray-600"
                title="Iniciar sesión"
              >
                <UserCircle className="w-6 h-6" />
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú mobile */}
        {menuOpen && (
          <div className="md:hidden px-6 py-3 flex flex-col gap-3 bg-white border-t">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
            <Link href="/categorias" onClick={() => setMenuOpen(false)}>
              Categorías
            </Link>
            <Link href="/ofertas" onClick={() => setMenuOpen(false)}>
              Ofertas
            </Link>
            <Link href="/contacto" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
            {user ? (
              <button
                onClick={() => console.log("logout")}
                className="text-left text-gray-700 hover:text-[hsl(var(--color-primary))] transition"
              >
                Cerrar sesión
              </button>
            ) : (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Iniciar sesión
              </Link>
            )}
          </div>
        )}
      </header>

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
      />
    </>
  );
};
