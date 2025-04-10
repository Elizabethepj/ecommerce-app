'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeItemFromCart: (id: number) => void // Eliminar productos
  updateItemQuantity: (id: number, quantity: number) => void // Actualizar la cantidad
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Añadir un producto al carrito
  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === newItem.id)
      if (existing) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prev, { ...newItem, quantity: 1 }]
      }
    })
  }

  // Eliminar un producto del carrito
  const removeItemFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  // Actualizar la cantidad de un producto en el carrito
  const updateItemQuantity = (id: number, quantity: number) => {
    setCart(prev => 
      prev.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeItemFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
