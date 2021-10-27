import { ReactNode } from 'react'

import SmoothScroll from '@/lib/react-smooth-scrolling'

import { Container } from './styles'

interface GlobalAnimationsProps {
  children: ReactNode
}

function GlobalAnimations({ children }: GlobalAnimationsProps): JSX.Element {
  return (
    <Container>
      {/* <SmoothScroll skew> */}
      {children}
      {/* </SmoothScroll> */}
    </Container>
  )
}

export default GlobalAnimations
