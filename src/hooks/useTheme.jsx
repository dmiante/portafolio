import { useEffect, useState } from 'react'

export function useTheme () {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function handleClick () {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    setTheme,
    handleClick
  }
}
