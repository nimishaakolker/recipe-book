import React from 'react'
import { useState,useEffect } from 'react'
import useDebounce from '../hooks/useDebounce'
import RecipeCard from '../components/RecipeCard'


const Home = () => {
     const [search, setSearch] = useState('')
     const [recipes, setRecipes] = useState([])
     const [loading, setLoading] = useState(false)
const [categories, setCategories] = useState([])
const [selectedCategory, setSelectedCategory] = useState('')


   const debouncedSearch = useDebounce(search, 500)



 useEffect(() => {
  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => setCategories(data.categories || []))
}, [])

     useEffect(() => {
      setLoading(true)

const url = selectedCategory 
  ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`   
  : `https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedSearch}`


        fetch(url)
        .then(res => res.json())
        .then(data => {
          setRecipes(data.meals || [])
        setLoading(false)}
      )
     },[debouncedSearch,selectedCategory])
     const filterCategory = () => {      
     }

  return (
    <div className=''>
      <div className='flex gap-2 flex-wrap'>
{categories.map(cat => (
  <button   onClick={() => setSelectedCategory(cat.strCategory)}
  key={cat.idCategory} 
  className='px-4 py-2 bg-black text-white rounded-2xl hover:scale-x-95 cursor-pointer'>
    {cat.strCategory}
  </button>
))}
      </div>


   <input className='bg-gray-50 text-black px-2 py-1 m-5'
    type="text" placeholder='Enter '
   value={search}
   onChange={(e) => setSearch(e.target.value)} />
   <p className='text-white'>{search}
   </p>

{loading && <p>Loading</p>}
 <div className='grid grid-cols-3 gap-5'>
 {
 recipes.map(recipe => (
  
<RecipeCard key={recipe.idMeal} meal={recipe} />
 ))
   }

  </div>
    </div>
  )
}

export default Home
