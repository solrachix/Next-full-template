import React from 'react'
import Cookies from 'js-cookie'

import authStore from '@/store/auth'

import SEO from '@/components/SEO'

import { Container } from '../styles/pages/Home'
import { USER_TOKEN } from '@/configs'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const { RedirectedTo } = router.query

  console.log('AQUI')
  function handleSubmit() {
    // authStore.signIn()

    // Token JWT example
    Cookies.set(
      USER_TOKEN,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcyNTc2OTMwLCJleHAiOjE2NzI1NzY4Nzk5fQ.Bc8YhV1NQmTp6CW4o9ZZpYjUFMcWHzO1ZuwVCnnO_Z4'
    )

    router.push(String(RedirectedTo) || '/private')
  }

  return (
    <Container>
      <SEO title="Pagina Login" description="Pagina criada por solrachix" />
      <h1>Tela de Login</h1>

      <button type="button" onClick={handleSubmit}>
        Fazer Login
      </button>
    </Container>
  )
}
