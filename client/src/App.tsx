
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import { ModeToggle } from './components/mode-toggle'
import Login_page from "./page/Login_page"


const App = () => {
  return (
    <>
  
    <ThemeProvider>

    <ModeToggle></ModeToggle>
   
    <Login_page></Login_page>

    </ThemeProvider>
    
    </>
  )
}

export default App