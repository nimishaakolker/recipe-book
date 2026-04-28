import React from 'react'
import { usePlanner } from '../context/MealPlannerContext'
import { useFavourites } from '../context/FavouritesContext'

const MealPlanner = () => {
  const { daymeal, dispatch} = usePlanner()
  if (!daymeal) return <div>Loading ...</div>
  const days = Object.keys(daymeal)
  const {favourites} = useFavourites()
  return (
    <div className='grid grid-cols-3 gap-2'>
      {days.map(day => (
       <div key={day}>
             <h2 className='font-bold'>{day}</h2>
             {daymeal[day] ? 
             <div>
              <p>{daymeal[day].strMeal}</p>
              <button onClick={() => dispatch({type : 'REMOVE', day})}>x</button>
             </div>
             
             :
             <select onChange={(e) => dispatch({
              type : 'ASSIGN',
              day,
              meal: favourites.find(f => f.idMeal === e.target.value)
        
             })} >

              <option value=''>
                Pick a meal
              </option>
              {
                favourites.map(fav => (
                  <option key={fav.idMeal} value={fav.idMeal}> {fav.strMeal}</option>
                ))
              }

             </select>
             }
              
       </div>
      ))}

      
    </div>
  )
}

export default MealPlanner
