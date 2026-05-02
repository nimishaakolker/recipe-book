import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import Home from '../pages/Home'
import { FavrouritesProvider } from '../context/FavouritesContext'
import userEvent from '@testing-library/user-event'
import { expect } from 'vitest'

const mockMeal = {
    idMeal : '123',
    strMeal : 'Pasta',
    strCategory: 'Italina',
}

test('render meal name', () => {
    render(
        <MemoryRouter>
            <FavrouritesProvider>
 <RecipeCard meal={mockMeal}
                  />
            </FavrouritesProvider>
           
        </MemoryRouter>
    )
    expect(screen.getByText('Pasta')).toBeInTheDocument()
})

test('favourite button renders', () => {
    render(
        <MemoryRouter>
            <FavrouritesProvider>
                <RecipeCard meal={mockMeal}></RecipeCard>
            </FavrouritesProvider>
        </MemoryRouter>
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})

test('search input updates on type', async() => {
    global.fetch = vi.fn(() => 
     Promise.resolve({
        json: () => Promise.resolve({meals : []})
     }))
    
    render(
        <Home></Home>
    )

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'pasta')
    expect(input).toHaveValue('pasta')

})

test('button text updates on click', async() => {
 render(
    <MemoryRouter>
 <FavrouritesProvider>
 <RecipeCard  meal={mockMeal}   ></RecipeCard>
 </FavrouritesProvider>
    </MemoryRouter>

)

 const button = screen.getByRole('button')
 await userEvent.click(button)
 expect(button).toHaveTextContent('❤️')
})
