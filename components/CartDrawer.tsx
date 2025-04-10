import { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useCart } from '@/context/CartContext'

type CartDrawerProps = {
  isOpen: boolean
  onClose: () => void
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { cart, removeItemFromCart, increaseQuantity, decreaseQuantity } = useCart()
  const [isClient, setIsClient] = useState(false)

  // Se asegura de que el componente se renderice solo en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Evita que el contenido del carrito se muestre en el servidor
  if (!isClient) return null

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.16 // 16% IVA
  const total = subtotal + tax

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      className="p-4 w-[350px] text-gray-600 shadow-lg" 
    >
      <div className="bg-gray-800 text-gray-100 h-full p-4 overflow-y-auto"> 
        <h2 className="text-xl font-bold mb-4 text-white">Tu Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-400">Tu carrito está vacío</p>
        ) : (
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-gray-600 pb-2">
                <div>
                  <p className="text-sm text-white">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.quantity} x ${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</p>

                  {/* Botones de aumentar y disminuir cantidad */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => decreaseQuantity(item.id)} 
                      className="text-gray-300 hover:text-white transition cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)} 
                      className="text-gray-300 hover:text-white transition cursor-pointer"
                    >
                      +
                    </button>
                  </div>

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
              <p className="text-xs text-gray-400">Subtotal: ${subtotal.toFixed(2)}</p>
              <p className="text-xs text-gray-400">IVA (16%): ${tax.toFixed(2)}</p>
              <p className="font-bold text-lg text-white">Total: ${total.toFixed(2)}</p>

              <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer">
                Finalizar compra
              </button>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  )
}
