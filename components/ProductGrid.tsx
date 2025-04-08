'use client'

import { useQuery } from '@tanstack/react-query'
import { getProducts, Product } from '@/lib/products-api'
import ProductCard from './ProductCard'
import { useState } from 'react'

export default function ProductGrid() {
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const limit = 6

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products', category, page],
    queryFn: () => getProducts(category, page, limit),
  })

  const total = data?.total || 0
  const totalPages = Math.ceil(total / limit)

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory)
    setPage(1) // Reinicia a la primera página cuando se cambia de categoría
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        <button onClick={() => handleCategoryChange('')} className="btn cursor-pointer">Todos</button>
        <button onClick={() => handleCategoryChange('ropa')} className="btn cursor-pointer">Ropa</button>
        <button onClick={() => handleCategoryChange('zapatos')} className="btn cursor-pointer">Zapatos</button>
        <button onClick={() => handleCategoryChange('tecnologia')} className="btn cursor-pointer">Tecnología</button>
      </div>

      {isLoading && <p className="text-center">Cargando productos...</p>}
      {isError && <p className="text-center text-red-500">Hubo un error al cargar los productos.</p>}
      {!isLoading && data?.products?.length === 0 && <p className="text-center">No hay productos disponibles.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6 gap-4 items-center">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="btn cursor-pointer"
        >
          Anterior
        </button>

        <span className="text-gray-700">Página {page} de {totalPages}</span>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="btn cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
