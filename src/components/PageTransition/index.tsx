import styled from 'styled-components'
import { useTransition, animated, config, useSpring } from 'react-spring'

import { useRouter } from '../../hooks/useRouter'

export const PageTransition = ({ children, ...props }) => {
  const router = useRouter()
  const [spring, set] = useSpring<{ opacity: number; scale: number }>(() => ({
    opacity: 0,
    scale: 0,
    config: { mass: 10, tension: 200, friction: 40 }
  }))

  const transitions = useTransition(router, router => router.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.wobbly

    // from: { transform: 'translateY(-2000px)' },
    // enter: { transform: 'translateY(0)' },
    // leave: { transform: 'translateY(200px)' },
    // config: config.stiff
  })

  return (
    <>
      {transitions.map(({ item, props: style, key }) => {
        if (!item.components) {
          return null
        }

        const { Component, props } = item.components[item.pathname]

        return (
          <Page style={style} key={key}>
            <animated.div
              style={{
                opacity: spring.opacity,
                transform: `scale(${spring.scale})`
              }}
            >
              {children(
                item ? { Component, pageProps: props && props.pageProps } : {}
              )}
            </animated.div>
          </Page>
        )
      })}
    </>
  )
}

const Page = styled(animated.div)`
  min-height: 100%;
  height: 100vh;

  & > div {
    height: inherit;
  }
`
