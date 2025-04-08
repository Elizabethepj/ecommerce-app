'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
//import Header from '@/components/Header'
//import Footer from '@/components/Footer'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/productos')
  }, [router])

  return null
}

