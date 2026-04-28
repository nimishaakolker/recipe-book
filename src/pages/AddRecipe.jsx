import React from 'react'
import { useForm } from 'react-hook-form';
import { useFavourites } from '../context/FavouritesContext';

const AddRecipe = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const {dispatch } = useFavourites()


    const onSubmit = (data) => {
        console.log('form data:', data) 
      const customRecipe = {
        idMeal : Date.now().toString(),
        strMeal:data.title,
        strCategory: data.category,
        strInstructions : data.instructions,
        strIngredients : data.ingredients,
        strMealThumb : data.image || 'https://tse2.mm.bing.net/th/id/OIP.9qXezSqZI8rfqN3cKtS9ZwHaE8?pid=Api&P=0&h=180',
        isCustom : true
      }
  console.log('custom recipe:', customRecipe)
      dispatch({type : 'ADD',meal : customRecipe})
    }

  return (
    <div className='p-8 min-h-screen flex items-center justify-center text-gray-800 dark: text-gray-100'>
      <form className='max-w-lg w-full mx-autp bg-white dark:bg-gray-900 p-8 shadow-2xl rounded-2xl'
       onSubmit={handleSubmit(onSubmit)}>

        <h1 className='font-bold text-3xl text-center'>Add Recipe</h1>
        <input className='border-1 p-2 m-4 w-full border rounded-xl p-3 mb-1 dark:bg-gray-700'
          {...register('title', { required: 'Title is required' })}
          type="text" placeholder='title' />
        {errors.title && <p className='text-red-500 text-sm mb-3'>{errors.title.message}</p>}


        <input 
        {...register('category', {required:'Category is required'})}
       
        className='w-full border rounded-xl p-3 mb-1 dark:bg-gray-700 p-2 m-4' type='text' placeholder='category'></input>
{errors.category && <p className='text-red-500 text-sm mb-3'>{errors.category.message}</p>}
         <div>
     <textarea
        {...register('ingredients', {
          required : 'Ingredients are required',
         validate:(value) => value.split(',').length >= 3 || 'Add atleast 3 ingredients(comma separated)'})}
        className='border-1 w-full border rounded-xl p-3 mb-1 dark:bg-gray-700  p-2 m-4' />
{errors.ingredients && <p className='text-red-500 text-sm mb-3'>{errors.ingredients.message}</p>}
        <textarea
           {...register('instructions', {required : 'Instructions are required'})}
        className='border-1  w-full border rounded-xl p-3 mb-1 dark:bg-gray-700 p-2 m-4' />
        {errors.instructions && <p className='text-red-500 text-sm mb-3'>{errors.instructions.message}</p>}
         </div>
  
        <input type="file" placeholder='Add image' />
        
        <button className='bg-black text-white px-3 py-1 rounded-4xl ' type='submit'>Add Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipe
