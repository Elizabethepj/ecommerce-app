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
      name: 'Chaqueta de cuero negra',
      price: 120.00,
      image: '',
      category: 'ropa',
    },
    {
      id: 6,
      name: 'Botines de cuero negros',
      price: 85.00,
      image: '',
      category: 'zapatos',
    },
    {
      id: 7,
      name: 'Smartwatch negro',
      price: 199.99,
      image: '',
      category: 'tecnología',
    },
    {
      id: 8,
      name: 'Pantalones deportivos negros',
      price: 35.00,
      image: '',
      category: 'ropa',
    },
    {
      id: 9,
      name: 'Zapatillas negras casuales',
      price: 60.00,
      image: '',
      category: 'zapatos',
    },
    {
      id: 10,
      name: 'Teclado mecánico retroiluminado',
      price: 150.00,
      image: '',
      category: 'tecnología',
    },
    {
      id: 11,
      name: 'Sudadera con capucha negra',
      price: 40.00,
      image: '',
      category: 'ropa',
    },
    {
      id: 12,
      name: 'Zapatos de vestir negros',
      price: 90.00,
      image: '',
      category: 'zapatos',
    },
    {
      id: 13,
      name: 'Auriculares inalámbricos negros',
      price: 120.00,
      image: '',
      category: 'tecnología',
    },
    {
      id: 14,
      name: 'Vestido negro elegante',
      price: 75.00,
      image: '',
      category: 'ropa',
    },
    {
      id: 15,
      name: 'Mocasines negros de cuero',
      price: 80.00,
      image: '',
      category: 'zapatos',
    },
    
  ]
  
  export async function getProducts(category: string = '') {
    await new Promise((res) => setTimeout(res, 1000)) // Simula demora
  
    if (category) {
      return allProducts.filter((product) => product.category === category)
    }
    return allProducts
  }