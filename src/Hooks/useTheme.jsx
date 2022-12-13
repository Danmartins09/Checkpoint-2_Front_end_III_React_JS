import {createContext, useContext, useState} from "react"


const ThemeContext = createContext()


export function ThemeProvider(props) {

  const themeLocalStorage = localStorage.getItem('theme')

  
  const [theme, setTheme] =
    useState(themeLocalStorage === null ? 'dark' : themeLocalStorage)

  
  function toggleTheme(themeReceived) {

    if(themeReceived !== theme) {

      setTheme(themeReceived)
      localStorage.setItem('theme', themeReceived)

    }

  }

  return(

    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      { props.children }
    </ThemeContext.Provider>

  )

}


export function useTheme() {

  return useContext(ThemeContext)

}