import React from 'react'
import { useFavourites } from '../context/FavouritesContext'
import RecipeCard from '../components/RecipeCard'
const Favourites = () => {
  const {favourites, dispatch} = useFavourites()
  return (
    <div>
      {favourites.length === 0 && <p>Emptyy</p>}
       <div className='grid grid-cols-3 gap-2'>
      {favourites.map(fav => (
       
  <RecipeCard meal = {fav} key={fav.idMeal}></RecipeCard>
   
         
      )
      
     
      )}
     </div>

    </div>
  )
}

export default Favourites
