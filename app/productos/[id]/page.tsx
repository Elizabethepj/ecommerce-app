'use client'

import { useQuery } from '@tanstack/react-query'
import { getProductById, getProducts } from '@/lib/products-api'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'
import { use } from 'react';  // Asegúrate de importar `use` de React

type Product = {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
}

type Props = {
  params: { id: string }
}

type ProductDetailContentProps = {
  productId: number
  addToCart: (item: { id: number, name: string, price: number, image: string, quantity: number }) => void
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params)  // Desenvuelve `params` con React.use() para acceder al valor
  const productId = Number(id)
  const { addToCart } = useCart()

  return <ProductDetailContent productId={productId} addToCart={addToCart} />
}

const ProductDetailContent = ({ productId, addToCart }: ProductDetailContentProps) => {
  const {
    data: product,
    isLoading: loadingProduct,
    isError: errorProduct
  } = useQuery<Product, Error, Product, ['product', number]>({
    queryKey: ['product', productId],
    queryFn: async () => {
      const result = await getProductById(productId)
      if (!result) throw new Error('Producto no encontrado')
      return result
    },
    enabled: !!productId,
  })

  const {
    data: relatedProductsData,
    isLoading: loadingRelated,
    isError: errorRelated
  } = useQuery<{
    products: Product[]
    total: number
  }>( {
    queryKey: ['related-products', product?.category],
    queryFn: async () => {
      if (!product?.category) {
        return { products: [], total: 0 }
      }
      return getProducts(product.category, 1, 4)
    },
    enabled: !!product?.category,
  })

  if (loadingProduct) return <p>Cargando...</p>
  if (errorProduct || !product) return <p>Producto no encontrado</p>

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
        className="ml-4 bg-gray-900 cursor-pointer text-white px-4 py-1 rounded-full hover:bg-blue-700 transition"
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
            ?.filter((p) => p.id !== product.id)
            ?.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  )
}
