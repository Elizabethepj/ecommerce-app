import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '@/components/ReactQueryProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-white text-black min-h-screen flex flex-col`}>
      <CartProvider>
        <ReactQueryProvider>
          <Header />
          <main className="flex-grow p-4">
            {children}
          </main>
          <Footer />
        </ReactQueryProvider>
      </CartProvider>
      </body>
    </html>
  )
}
