import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 4rem;
    font-weight: bold;

    span {
      color: ${props => props.theme.colors.primary.normal};
    }

    a {
      font-size: inherit;
      font-weight: bold;
      text-decoration: none;

      transition: all 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  a {
    text-decoration: underline;

    color: ${props => props.theme.colors.primary.normal};
  }

  button {
    background: transparent;
    border: none;

    color: ${props => props.theme.colors.primary.normal};
  }
`
