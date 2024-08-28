import React from 'react'
import './RemoveButton.css'
import { deleteIngredient } from '../../../Services/ingredientServices/ingredientsServices.js'

export async function action (id){
    await deleteIngredient(id)
    .then(res => console.log(res))
    .catch(e => console.log(e))
}
export default function RemoveButton () {
    return(
        <div className='removeButton' onClick={action}>
                Remove
        </div>
    )
}