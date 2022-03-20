import { ReactNode } from 'react'

import SmoothScroll from '@/lib/react-smooth-scrolling'

import { Container } from './styles'
// import { PageTransition } from '../PageTransition'
import dynamic from 'next/dynamic'

const PageTransition = dynamic(() => import('../PageTransition'))

interface GlobalAnimationsProps {
  children: ReactNode
}

function GlobalAnimations({ children }: GlobalAnimationsProps): JSX.Element {
  return (
    <Container>
      <PageTransition>
        {/* <SmoothScroll skew> */}
        {children}
        {/* </SmoothScroll> */}
      </PageTransition>
    </Container>
  )
}

export default GlobalAnimations
