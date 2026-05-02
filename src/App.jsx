import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import {useTheme} from './context/ThemeContext'

import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import ErrorBoundary from './components/ErrorBoundary'

const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'))

const RecipeDetail = lazy(() => import(/* webpackChunkName: "recipe-detail" */ './pages/RecipeDetail'))
const Favourites = lazy(() => import(/* webpackChunkName: "favourites" */ './pages/Favourites'))
const MealPlanner = lazy(() => import(/* webpackChunkName: "meal-planner" */ './pages/MealPlanner'))
const AddRecipe = lazy(() => import(/* webpackChunkName: "add-recipe" */ './pages/AddRecipe'))




const App = () => {
  const { theme } = useTheme()
 useEffect(() => {
  // add/remove 'dark' class on html element
  document.documentElement.classList.toggle('dark', theme === 'dark')
}, [theme])
  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar/>
   <ErrorBoundary>
       <Suspense fallback={<div>Loading</div>}>
 <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/recipe/:id' element={<RecipeDetail/>}/>
          <Route path='/add-recipe' element={<AddRecipe/>}/>
              <Route path="/favourites" element={<Favourites />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
      </Routes>
      </Suspense>
   </ErrorBoundary>
     
    </div>
  )
}

export default App
