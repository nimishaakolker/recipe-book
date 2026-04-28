import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { FavrouritesProvider } from './context/FavouritesContext.jsx'
import { MealProvider } from './context/MealPlannerContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavrouritesProvider>
 <BrowserRouter>
 <MealProvider>
  <ThemeProvider>
      <App />
    </ThemeProvider>

 </MealProvider>
  
    </BrowserRouter>
    </FavrouritesProvider>
   
  
  </StrictMode>,
)
