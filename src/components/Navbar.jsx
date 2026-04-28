import React from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '../context/ThemeContext'
const Navbar = () => {

  const {theme, toggleTheme} = useTheme()
  return (
   <nav className='bg-white dark:bg-gray-800 shadow-sm px-6 py-4 flex gap-6 items-center'>
  
      <span className="font-bold text-orange-500 text-xl">🍳 RecipeBox</span>
      <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">Home</Link>
      <Link to="/favourites" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">Favourites</Link>
      <Link to="/meal-planner" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">Meal Planner</Link>
      <Link to="/add-recipe" className="text-gray-600 dark:text-gray-300 hover:text-orange-500">Add Recipe</Link>

      <button onClick={toggleTheme}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
 
  )
}

export default Navbar
