import React from 'react'
import './MealDetails.css'

export default function MealDetails(){
    return(
        <div id='mealDetails'>
            <div id='imgDiv'>
                <img id='mealImg' alt='plate of spaghetti' src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg"></img>
            </div>
           
            <div id='detailsPage'>
                <div id='detailTabs'>
                    <div className='tab' id='ingredientsTab'>Ingredients Tab</div>
                    <div className='tab' id='instructionsTab'>Instructions Tab</div>
                    <div className='tab' id='detailsTab'>Details Tab</div>
                </div>

                <div>
                    <div className='page' id='ingredientsPage'>Ingredients Page
                        <div id='MDIngredientsList' >Ingredients List</div>
                    </div>
                    <div className='page' id='instructionsPage'>Instructions Page
                        <div id='intructionsList' >Intructions List</div>
                    </div>
                    <div className='page' id='detailsPage'>Details Page
                        <div className='detailItems' id='MDName' >Name</div>
                        <div className='detailItems' id='MDPrep' >Prep</div>
                        <div className='detailItems' id='MDCook' >Cook</div>
                        <div className='detailItems' id='MDTotal' >Total</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}