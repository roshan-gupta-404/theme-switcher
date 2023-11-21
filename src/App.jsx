import { useEffect, useState } from 'react'
import { ThemProvider } from './contexts/Context'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import './App.css'

function App() {
  // we can define the function and assign values to variable here defined in createContext();
  // These above values will be provided by ThemeProvider but if not defined ThemeProvider will give its default values.
  const [themeMode,setThemeMode] = useState("light");
  const lightTheme = ()=>{
    setThemeMode('light')
  }
  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  
  // actual change in theme.
  useEffect(()=>{
    const html = document.querySelector('html');
    html.classList.remove('dark','light')
    html.classList.add(themeMode)
  },[themeMode])
  return (
    <>
      <ThemProvider value={{themeMode,lightTheme,darkTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
             <Card/>
            </div>
          </div>
        </div>
      </ThemProvider>
    </>
  )
}

export default App
