
import { createContext, useReducer, useContext, useEffect } from 'react' 
import useLocalStorage from '../hooks/useLocalStorage'

export const favrouritesContext = createContext()

 
function favrouritesReducer(state,action) {
    switch(action.type){
        case 'ADD' : return [...state, action.meal]
        case 'REMOVE' : return state.filter(m => m.idMeal !== action.id)
     default: 
     return state    
    }
    
}

export function FavrouritesProvider({ children}) {
    const [storedFavourites, setStoredFavourites] = useLocalStorage('favourites', [])
    const [favourites, dispatch] = useReducer(favrouritesReducer, storedFavourites)
useEffect(() => {
    setStoredFavourites(favourites)}, [favourites])

    return (
        <favrouritesContext.Provider value={{favourites, dispatch}}>
            {children}
        </favrouritesContext.Provider>
    )
}


export function useFavourites(){
    return useContext(favrouritesContext)
}