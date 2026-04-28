
import useLocalStorage from "../hooks/useLocalStorage"
import { createContext, useReducer, useEffect, useContext } from 'react'
const initialState = {
    Monday: null,
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: {},
    Saturday: null,
    Sunday: null,
}

const MealPlannerContext = createContext()

function mealReducer (state, action){
    switch(action.type){
        case 'ASSIGN' : return {
            ...state,
            [action.day] : action.meal
        }
        case 'REMOVE' : return {
           ...state,
           [action.day] : null
        }
        default : return state

    }
}

export function MealProvider ({children}){
    const [storedMeals, setStoredMeals] = useLocalStorage('daymeal', initialState)
   const [daymeal, dispatch] = useReducer(mealReducer,storedMeals)
   useEffect(() => {setStoredMeals(daymeal)}, [daymeal])

return (
    <MealPlannerContext.Provider value={{daymeal, dispatch}} >
        {children}

    </MealPlannerContext.Provider>
)
}

export function usePlanner(){
    return useContext(MealPlannerContext)
}
