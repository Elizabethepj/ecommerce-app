'use client'

type Product = {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-200">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <button className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}
