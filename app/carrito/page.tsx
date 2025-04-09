'use client'

import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const { cart } = useCart()

  // Verificar si el carrito está vacío
  if (!cart || cart.length === 0) {
    return <div className="text-center text-xl mt-10">Carrito vacío</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-6">Tu carrito</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li key={item.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price.toFixed(2)}</p>
            <p>Total: ${ (item.quantity * item.price).toFixed(2) }</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-xl font-semibold">
        <h3>
          Total: $
          {cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
        </h3>
      </div>
    </div>
  )
}
