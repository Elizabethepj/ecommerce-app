'use client'

import { useCart } from '@/context/CartContext' 
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'

export default function Header() {
  const { cart } = useCart()

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <header className="bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
       
        <h1 className="text-2xl font-bold text-white">Tiendas Centrales</h1>

      
        <nav className="flex items-center gap-8">
          <Link href="#" className="text-gray-300 hover:text-white transition">Sobre nosotros</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition">Contacto</Link>

      
          <div className="relative">
            <Link href="/carrito">
              <FaShoppingCart className="text-white text-2xl" />
            </Link>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
