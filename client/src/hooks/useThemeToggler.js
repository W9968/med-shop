import { useState, useEffect } from 'react'

export const useThemeToggler = () => {
  const [theme, setTheme] = useState('light')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode) => {
    sessionStorage.setItem('mode', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = sessionStorage.getItem('mode')
    localTheme ? setTheme(localTheme) : setMode('light')
    setComponentMounted(true)
  }, []) // eslint-disable-line

  return [theme, toggleTheme, componentMounted]
}
