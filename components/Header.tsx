'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart, FaTrashAlt } from 'react-icons/fa'  // Importamos el ícono de la papelera
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useCart } from '@/context/CartContext'

export default function Header() {
  const { cart, removeItemFromCart } = useCart()  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev)

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.16 // 16% IVA por ejemplo
  const total = subtotal + tax

  return (
    <header className="bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Tiendas Centrales</h1>

        <nav className="flex items-center gap-8">
          <Link href="#" className="text-gray-300 hover:text-white transition">Sobre nosotros</Link>
          <Link href="#" className="text-gray-300 hover:text-white transition">Contacto</Link>

          {/* Botón del carrito */}
          <div className="relative cursor-pointer" onClick={toggleDrawer}>
            <FaShoppingCart className="text-white text-2xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </nav>
      </div>

      {/* Drawer del carrito */}
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="p-4 w-[300px] text-gray-600 shadow-lg"
      >
        <div className="bg-gray-800 text-gray-100 h-full p-4">
          <h2 className="text-xl font-bold mb-4 text-white">Tu Carrito</h2>

          {cart.length === 0 ? (
            <p className="text-gray-400">Tu carrito está vacío</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b border-gray-600 pb-2">
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.quantity} x ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    {/* Botón de eliminar */}
                    <button 
                      onClick={() => removeItemFromCart(item.id)}  
                      className="text-red-500 hover:text-red-700 transition cursor-pointer"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}

              {/* Resumen del carrito */}
              <div className="mt-4 border-t border-gray-600 pt-4">
                <p className="text-sm text-gray-400">Subtotal: ${subtotal.toFixed(2)}</p>
                <p className="text-sm text-gray-400">IVA (16%): ${tax.toFixed(2)}</p>
                <p className="font-bold text-lg text-white">Total: ${total.toFixed(2)}</p>

                <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                  Finalizar compra
                </button>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </header>
  )
}
