export type Product = {
    id: number
    name: string
    price: number
    image: string
    category: string
    description: string
  }
  
  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Camiseta negra',
      price: 19.99,
      image: '/images/camiseta.jpg',
      category: 'Ropa',
      description:'Una camiseta básica y elegante de color negro, perfecta para cualquier ocasión casual. Confeccionada en algodón de alta calidad, esta prenda es cómoda y versátil para cualquier temporada.',
    },
    {
      id: 2,
      name: 'Zapatillas deportivas',
      price: 49.99,
      image: '/images/zapatillas-amarillas.jpg',
      category: 'Zapatos',
      description: 'Zapatillas deportivas diseñadas para brindar confort y estilo mientras practicas deportes o disfrutas de un día activo. Con una suela resistente y materiales transpirables, son ideales para todo tipo de actividades físicas.',
    },
    {
      id: 3,
      name: 'Audífonos Bluetooth',
      price: 29.99,
      image: '/images/audifonos.png',
      category: 'Tecnología',
      description:'Audífonos inalámbricos Bluetooth que ofrecen un sonido de alta calidad y un ajuste cómodo. Son perfectos para escuchar música, hacer llamadas y disfrutar de la libertad de movimiento sin cables.',
    },
    {
      id: 4,
      name: 'computador portátil',
      price: 400,
      image: '/images/computador.jpg',
      category: 'Tecnología',
      description:'Computador portátil de alto rendimiento, ideal para trabajo y entretenimiento. Con una pantalla amplia, potente procesador y gran capacidad de almacenamiento, es perfecto para usuarios exigentes que requieren velocidad y eficiencia.',
    },
    {
      id: 5,
      name: 'teclado',
      price: 120.00,
      image: '/images/teclado.jpg',
      category: 'Tecnología',
      description:'Teclado ergonómico y duradero, diseñado para ofrecer una experiencia de escritura cómoda y fluida. Ideal tanto para trabajar como para jugar, con teclas de respuesta rápida y diseño compacto.',
    },
    {
      id: 6,
      name: 'zapatos elegantes',
      price: 85.00,
      image: '/images/zapatosele.jpg',
      category: 'Zapatos',
      description:'Zapatos elegantes de diseño sofisticado, ideales para ocasiones especiales y eventos formales. Confeccionados con materiales de alta calidad, brindan comodidad y estilo en todo momento.',
    },
    {
      id: 7,
      name: 'Smartwatch',
      price: 199.99,
      image: '/images/picture17.jpg',
      category: 'Tecnología',
      description:'Smartwatch moderno y funcional que te ayuda a mantenerte conectado y organizado. Con pantalla táctil, monitorización de actividad física, notificaciones inteligentes y una variedad de aplicaciones, es el complemento perfecto para tu día a día.',
    },
    {
      id: 8,
      name: 'Chaqueta',
      price: 70.00,
      image: '/images/chaqueta.jpg',
      category: 'Ropa',
      description:'Chaqueta de estilo moderno y corte elegante, perfecta para abrigarte en los días frescos sin sacrificar el estilo. Hecha con materiales de alta calidad, esta chaqueta te mantendrá cómodo y a la moda.',
    },
    {
      id: 9,
      name: 'Zapatos elegantes de mujer',
      price: 60.00,
      image: '/images/zapmujere.jpg',
      category: 'Zapatos',
      description:' Zapatos de mujer de estilo elegante y sofisticado, ideales para eventos formales o noches especiales. Su diseño y acabado cuidadosamente elaborados garantizan un ajuste cómodo y un look impecable.',
    },
    {
      id: 10,
      name: 'Zapatos deportivos',
      price: 90.00,
      image: '/images/zapatosdep.jpg',
      category: 'Zapatos',
      description:'Zapatos deportivos diseñados para ofrecerte el máximo rendimiento en cualquier actividad física. Con una suela antideslizante y materiales transpirables, estos zapatos proporcionan comodidad y soporte en cada paso.',
    },
    {
      id: 11,
      name: 'Vestido elegante',
      price: 40.00,
      image: '/images/vestidoele.jpg',
      category: 'Ropa',
      description:' Vestido elegante de corte moderno, ideal para ocasiones formales y celebraciones. Con detalles sutiles y una tela de alta calidad, este vestido realza tu figura y te asegura un look impresionante.',
    },
    {
      id: 12,
      name: 'Cámara fotográfica',
      price: 90.00,
      image: '/images/Cámara.jpg',
      category: 'Tecnología',
      description:'Cámara fotográfica digital de alta resolución, perfecta para capturar momentos especiales con gran detalle y claridad. Ideal tanto para fotógrafos principiantes como para expertos, cuenta con diversas funciones avanzadas.',
    },
    {
      id: 13,
      name: 'Traje elegante negro',
      price: 120.00,
      image: '/images/abrigoele.jpg',
      category: 'Ropa',
      description:'Traje elegante negro, la opción perfecta para eventos formales y ocasiones especiales. Con un corte clásico y un diseño atemporal, este traje te garantiza un look sofisticado y adecuado para cualquier evento importante.',
    },
    {
      id: 14,
      name: 'Traje elegante azul',
      price: 75.00,
      image: '/images/trajeazul.jpg',
      category: 'Ropa',
      description:'Traje elegante azul, ideal para quienes buscan un look profesional y estilizado. Con un diseño moderno y materiales de alta calidad, este traje es perfecto para una presentación importante o una noche formal.',
    },
    {
      id: 15,
      name: 'Traje elegante de mujer',
      price: 80.00,
      image: '/images/trajemujer.jpg',
      category: 'Ropa',
      description:'Traje elegante de mujer, compuesto por un conjunto de chaqueta y pantalón o falda, diseñado para resaltar tu figura con elegancia y distinción. Perfecto para ocasiones formales, reuniones de negocios o eventos especiales.',
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

   export function getProductById(id: number) {
    return allProducts.find((product) => product.id === id)
  }
  
