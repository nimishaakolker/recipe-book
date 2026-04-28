import { useState, useEffect } from "react";

const useBounce = (value, delay= 200) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {setDebouncedValue(value)}, delay)
        return () => clearTimeout(timer)
    }, [value, delay])
  return  debouncedValue
}

export default useBounce