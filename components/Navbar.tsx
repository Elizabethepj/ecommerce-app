import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">Mi Tienda</Link>
        <Link href="/productos" className="hover:underline">Productos</Link>
      </div>
    </nav>
  )
}



/*'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-gray-800">Mi Tienda</span>
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/products" className="text-gray-700 hover:text-gray-900">Productos</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">Nosotros</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}*/
