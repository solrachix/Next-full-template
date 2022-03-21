import Link from 'next/link'
import React from 'react'

import SEO from '@/components/SEO'

import { Container } from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <SEO title="Pagina teste" description="Pagina criada por solrachix" />
      <h1>Area segura</h1>

      <Link href="/">⬅️ Voltar a home</Link>
    </Container>
  )
}
