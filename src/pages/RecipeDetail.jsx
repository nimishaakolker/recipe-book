import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useFavourites } from '../context/FavouritesContext'
import useFetch from '../hooks/useFetch'
const RecipeDetail = () => {
  const { id } = useParams()
  const { favourites, dispatch } = useFavourites()
  console.log('id from url:', id)
console.log('favourites:', favourites)
const customMeal = favourites.find(m => m.idMeal === id && m.isCustom === true)
  
  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setMeal(data.meals[0])
  //       setLoading(false)
  //       console.log(data.meals[0])
  //     }
  //     )

  // }, [id])

  const {data, loading, error} = useFetch(customMeal ?   null :`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)


  const meal = customMeal || data?.meals?.[0]

  if (loading) return <div className='p-6'> Loading</div>
 
  if(error) return <div>Something went wrong</div>
  if (!meal) return <div className='p-6'>Recipe not found</div>

  const ingredients = customMeal ? customMeal.strIngredients.split(','): Array.from({ length: 20 }, (_, i) => meal[`strIngredient${i + 1}`])
    .filter(Boolean)

    const isFav = favourites.some(m => m.idMeal === meal.idMeal)

  return (
    <div>
      <h1 className='font-bold text-3xl text-center'>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full rounded-xl mb-6" />
      <p className="text-sm text-gray-500 mb-2">{meal.strCategory} • {meal.strArea}</p>
      <button onClick={() => dispatch({ type: isFav ? 'REMOVE' : 'ADD', meal, id: meal.idMeal, })}>
        {isFav ? '❤️' : '🤍'}
      </button>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i} className='mx-3'>    {ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      {meal.strInstructions.split('\n').map((step, i) => (
        <p key={i} className='mb-3'>{step}</p>
      ))}
    </div>
  )
}

export default RecipeDetail
