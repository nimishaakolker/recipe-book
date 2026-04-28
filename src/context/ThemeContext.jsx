import { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useLocalStorage('theme', 'light')
  
  const toggleTheme = () => {
setTheme(theme === 'light' ? 'dark' : 'light')  
  
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


export const useTheme = () => useContext(ThemeContext)
