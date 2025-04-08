import { getProductById } from '@/lib/products-api'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProducts } from '@/lib/products-api'

type Props = {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: Props) {
  const productId = Number(params.id)
  const product = getProductById(productId)

  if (!product) {
    notFound() // muestra la página 404 si no se encuentra el producto
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          {/* Descripción del producto */}
          <p className="text-gray-700 mt-4">{product.description}</p>

      <div className="flex space-x-4 mt-6">
        
      {/* Categoría con enlace */}
      <Link href={`/productos/categoria/${product.category}`} className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mt-6 hover:bg-blue-200 transition">
        {product.category}
      </Link>

      <Link href="/productos" className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mt-6 hover:bg-blue-200 transition">
        Atrás
      </Link>


    </div>
    </div>
  )
}
