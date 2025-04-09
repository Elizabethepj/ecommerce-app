'use client'

import { use } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from '@/lib/products-api'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/context/CartContext'

type Props = {
  params: Promise<{ id: string }>
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params)
  const productId = Number(id)
  const {addToCart} = useCart()

  const {
    data: product,
    isLoading: loadingProduct,
    isError: errorProduct
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
    enabled: !!productId,
  })

  const {
    data: relatedProductsData,
    isLoading: loadingRelated,
    isError: errorRelated
  } = useQuery({
    queryKey: ['related-products', product?.category],
    queryFn: () => {
      if (!product?.category) return Promise.resolve([])
      return getProducts(product.category, 1, 4)
    },
    enabled: !!product?.category,
  })

  if (loadingProduct) return <p>Cargando...</p>
  if (errorProduct || !product) return notFound()

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <p className="text-gray-700 mt-4">{product.description}</p>

      <button
      onClick={() =>
      addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
      })
      }
      className="ml-4 bg-gray-900 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
      >
      Agregar al carrito
      </button>
      

      <Link href="/productos" className="ml-4 inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mt-6 hover:bg-blue-200 transition">
        Atrás
      </Link>
      
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Productos relacionados</h2>

        {loadingRelated && <p>Cargando productos relacionados...</p>}
        {errorRelated && <p>Error al cargar productos relacionados.</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {relatedProductsData?.products
            ?.filter((p: any) => p.id !== product.id)
            ?.map((relatedProduct: any) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  )
}
