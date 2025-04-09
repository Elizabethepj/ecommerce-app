'use client'

import { useCart } from '@/context/CartContext' 
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa' // Ícono de carrito de compras

export default function Header() {
  const { cart } = useCart()

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="bg-gray-900 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Tiendas Centrales</h1>

      <div className="relative flex items-center gap-3">
        <Link href="/carrito">
          <FaShoppingCart className="text-white text-2xl" />
        </Link>
        {cartItemCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </div>
      
      <nav className="space-x-5">
        <a href="#" className="text-gray-300">Sobre nosotros</a>
        <a href="#" className="text-gray-300">Contacto</a>
      </nav>
     
 
    </header>
  )
}
