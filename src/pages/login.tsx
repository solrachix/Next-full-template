import React from 'react'
import Cookies from 'js-cookie'

import authStore from '@/store/auth'

import SEO from '@/components/SEO'

import { Container } from '../styles/pages/Home'
import { USER_TOKEN } from '@/configs'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { RedirectedTo } = router.query

  function handleSubmit() {
    // authStore.signIn()

    // Token JWT example
    Cookies.set(
      USER_TOKEN,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ3ODUxNDkwLCJleHAiOjE2NDg0NTYyOTB9.wZta3VsDWZgL89A2SzQ9qUmAjQ4wvkztocm2bHBwOas'
    )

    router.push(RedirectedTo || '/teste')
  }

  return (
    <Container>
      <SEO title="Pagina Login" description="Pagina criada por solrachix" />
      <h1>Tela de Login</h1>

      <button onClick={handleSubmit}>Fazer Login</button>
    </Container>
  )
}
