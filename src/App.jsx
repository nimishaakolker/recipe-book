import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import RecipeDetail from './pages/RecipeDetail'
import Favourites from './pages/Favourites'
import MealPlanner from './pages/MealPlanner'
import AddRecipe from './pages/AddRecipe'
import { useEffect } from 'react'
import {useTheme} from './context/ThemeContext'

const App = () => {
  const { theme } = useTheme()
 useEffect(() => {
  // add/remove 'dark' class on html element
  document.documentElement.classList.toggle('dark', theme === 'dark')
}, [theme])
  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/recipe/:id' element={<RecipeDetail/>}/>
          <Route path='/add-recipe' element={<AddRecipe/>}/>
              <Route path="/favourites" element={<Favourites />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
      </Routes>
    </div>
  )
}

export default App
