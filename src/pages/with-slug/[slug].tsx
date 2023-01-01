import React from 'react'
import Link from 'next/link'

import SEO from './../../components/SEO'

import { Container } from './../../styles/pages/Home'

import type { GetStaticProps } from 'next'

function WithSlug(props) {
  return (
    <Container>
      <SEO title={`Case ${props.pageProps.slug}`} />

      <h1>{props.pageProps.slug}</h1>
      <Link href="/">⬅️ Voltar a home</Link>
    </Container>
  )
}

export default WithSlug

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
export const getStaticProps: GetStaticProps = async context => {
  const slug = String(context.params.slug)

  return {
    props: {
      slug
    }
  }
}
