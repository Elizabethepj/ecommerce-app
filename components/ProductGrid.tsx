'use client'

import { useQuery } from '@tanstack/react-query'
import { getProducts, Product } from '@/lib/products-api'
import ProductCard from './ProductCard'
import { useState } from 'react'

export default function ProductGrid() {
  const [category, setCategory] = useState('')
  const { data, isLoading, isError } = useQuery<Product[]>({
    queryKey: ['products', category],
    queryFn: () => getProducts(category),
  })

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-wrap gap-2 ">
        <button onClick={() => setCategory('')} className="btn">Todos</button>
        <button onClick={() => setCategory('ropa')} className="btn">Ropa</button>
        <button onClick={() => setCategory('zapatos')} className="btn">Zapatos</button>
        <button onClick={() => setCategory('tecnologia')} className="btn">Tecnología</button>
      </div>

      {isLoading && <p>Cargando productos...</p>}
      {isError && <p>Hubo un error al cargar los productos.</p>}
      {!isLoading && data?.length === 0 && <p>No hay productos disponibles.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
