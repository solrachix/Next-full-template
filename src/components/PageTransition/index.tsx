import styled from 'styled-components'
import { useTransition, animated, config, useSpring } from 'react-spring'

import { useRouter } from '../../hooks/useRouter'

function PageTransition({ children }) {
  const router = useRouter()
  const [spring, set] = useSpring<{ opacity: number; scale: number }>(() => ({
    opacity: 1,
    scale: 0,
    from: { opacity: 0 },
    config: { mass: 10, tension: 200, friction: 40 }
  }))

  const transitions = useTransition(router, router => router.pathname, {
    from: { transform: 'translateX(-1000px)' },
    enter: { transform: 'translateX(0)' },
    leave: { transform: 'translateX(0)' },
    config: config.wobbly
  })

  return transitions.map(({ item, props: style, key }) => {
    if (!item.components) {
      return null
    }

    const { Component, props } = item.components[item.pathname]

    return (
      <Page style={style} key={key}>
        <animated.div
          className="teste"
          style={{
            opacity: spring.opacity,
            transform: `scale(${spring.scale})`
          }}
        >
          {children.type(
            item ? { Component, pageProps: props && props.pageProps } : {}
          )}
        </animated.div>
      </Page>
    )
  })
}
export default PageTransition

const Page = styled(animated.div)`
  min-height: 100%;
  height: 100vh;

  & > div {
    height: inherit;
  }
`
