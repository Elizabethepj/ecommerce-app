import Image from 'next/image'
import { Product } from '@/lib/products-api'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="relative w-full h-40 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain cursor-pointer"
          style={{ borderRadius: '0.10rem' }} // Borde redondeado directo en la imagen
        />
      </div>
      <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
    </div>
  )
}
