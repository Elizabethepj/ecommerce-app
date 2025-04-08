export type Product = {
    id: number
    name: string
    price: number
    image: string
    category: string
  }
  
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Camiseta negra',
      price: 19.99,
      image: '/images/camiseta.jpg',
      category: 'ropa',
    },
    {
      id: 2,
      name: 'Zapatillas deportivas',
      price: 49.99,
      image: '/images/zapatillas-amarillas.jpg',
      category: 'zapatos',
    },
    {
      id: 3,
      name: 'Audífonos Bluetooth',
      price: 29.99,
      image: '/images/audifonos.png',
      category: 'tecnologia',
    },
    {
      id: 4,
      name: 'computador portátil',
      price: 400,
      image: '/images/computador.jpg',
      category: 'tecnologia',
    },
    {
      id: 5,
      name: 'teclado',
      price: 120.00,
      image: '/images/teclado.jpg',
      category: 'tecnologia',
    },
    {
      id: 6,
      name: 'zapatos elegantes',
      price: 85.00,
      image: '/images/zapatosele.jpg',
      category: 'zapatosele',
    },
    {
      id: 7,
      name: 'Smartwatch',
      price: 199.99,
      image: '/images/picture17.jpg',
      category: 'tecnología',
    },
    {
      id: 8,
      name: 'Chaqueta',
      price: 70.00,
      image: '/images/chaqueta.jpg',
      category: 'ropa',
    },
    {
      id: 9,
      name: 'Zapatos elegantes de mujer',
      price: 60.00,
      image: '/images/zapmujere.jpg',
      category: 'zapatos',
    },
    {
      id: 10,
      name: 'Zapatos deportivos',
      price: 90.00,
      image: '/images/zapatosdep.jpg',
      category: 'zapatos',
    },
    {
      id: 11,
      name: 'Vestido elegante',
      price: 40.00,
      image: '/images/vestidoele.jpg',
      category: 'ropa',
    },
    {
      id: 12,
      name: 'Cámara fotográfica',
      price: 90.00,
      image: '/images/Cámara.jpg',
      category: 'tecnologia',
    },
    {
      id: 13,
      name: 'Traje elegante negro',
      price: 120.00,
      image: '/images/abrigoele.jpg',
      category: 'ropa',
    },
    {
      id: 14,
      name: 'Traje elegante azul',
      price: 75.00,
      image: '/images/trajeazul.jpg',
      category: 'ropa',
    },
    {
      id: 15,
      name: 'Traje elegante de mujer',
      price: 80.00,
      image: '/images/trajemujer.jpg',
      category: 'ropa',
    },
    
  ]
  
  export async function getProducts(category: string = '', page: number = 1, limit: number = 6) {
    await new Promise((res) => setTimeout(res, 1000)) // Simula demora
  
    let filtered = category
      ? allProducts.filter((product) => product.category === category)
      : allProducts
  
    const start = (page - 1) * limit
    const paginated = filtered.slice(start, start + limit)
  
    return {
    products: paginated,
    total: filtered.length
    }
   }
