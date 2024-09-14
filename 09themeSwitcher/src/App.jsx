import './App.css'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import { ThemeProvider } from './context/theme'
import { useEffect, useState } from 'react'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }
  const darkMode = () => {
    setThemeMode("dark")
  }


  //actual change in theme
  useEffect(() => {
      document.querySelector("html").classList.remove("light", "dark")
      document.querySelector("html").classList.add(themeMode)
  },[themeMode])

    return (
      <ThemeProvider value={{darkMode, lightMode, themeMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn />
                </div>
  
                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
      </ThemeProvider>
    )
  }
  

export default App