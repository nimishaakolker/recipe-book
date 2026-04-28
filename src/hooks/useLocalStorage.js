import React from 'react'
import {useState, useEffect} from 'react'
const useLocalStorage = (key, intialValue) => {
  const [value, setValue] = useState(() => {
      const stored = localStorage.getItem(key)
try{
 return stored ? JSON.parse(stored) : intialValue
  }catch {
    return stored
  }}
  );

  

  
    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
    return [value, setValue]
}

export default useLocalStorage
