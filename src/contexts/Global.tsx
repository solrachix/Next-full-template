import React, { createContext, useState, useContext } from 'react'

import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/styles/GlobalStyle'
import { LightTheme } from '@/styles/theme'

interface GlobalContextData {
  handleThemeChanges(): void
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData)

export const GlobalProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(LightTheme)

  function handleThemeChanges() {
    setTheme(LightTheme)
  }

  return (
    <GlobalContext.Provider value={{ handleThemeChanges }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

// Hook próprio
export function useGlobal(): GlobalContextData {
  const context = useContext(GlobalContext)

  return context
}
