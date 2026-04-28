import React from 'react'
import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
const RecipeCard = React.memo(({ meal }) => {
   const {favourites, dispatch} = useFavourites()
const isFav = favourites.some(m => m.idMeal === meal.idMeal) 
 const ingredients = Array.from({ length: 20 }, (_, i) => meal[`strIngredient${i + 1}`])
    .filter(Boolean)
  return (

    <div className='p-4 border rounded-4xl shadow-2xl'>
      
    <Link to={`/recipe/${meal.idMeal}`}>
        <h3 className='font-bold text-2xl text:white dark:text-gray-900'>{meal.strMeal}</h3>
        {meal.strCategory}

      
    <ul>
      {ingredients.map((ingredient,i )=> (
         <li key={i} className='mx-3'>    {ingredient}</li>
     ))}
      </ul> 
        </Link>
          <button onClick ={ () => dispatch({type : isFav ? 'REMOVE' : 'ADD', meal , id:meal.idMeal})}>
          {isFav ? '❤️' : '🤍'}  
        </button>
    </div>
  
    
  )
})

export default mealCard
