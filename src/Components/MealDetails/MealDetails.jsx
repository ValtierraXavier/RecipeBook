import React from 'react'
import './MealDetails.css'

export default function MealDetails(){
    const ingredients = [
        {
            ingredient: "Tomato",
            measurement: {
                amount: 3,
                type: "Cup"
            },
            prepStyle: "diced"
        },
        {
            ingredient: "water",
            measurement: {
                amount: 2,
                type: "Cup"
            },
            prepStyle: "N/A"
        },
        {
            ingredient: "Pasta",
            measurement: {
                amount: 1,
                type: "Cup"
            },
            prepStyle: "N/A"
        },
        {
            ingredient: "Parmesan",
            measurement: {
                amount: 3,
                type: "Tbsp"
            },
            prepStyle: "Grated"
        },
        {
            ingredient: "Ground Beef",
            measurement: {
                amount: 1,
                type: "Pound"
            },
            prepStyle: "Meat Balls"
        },
    ]
    const instructions = [
        'Gather your ingredients',
        'Salt water and bring to a boil (cover it to boil it faster)',
        'Add pasta to boiling water',
        'In a large pot, add the tomatoes and water, cover and bring to a boil',
        'add pasta to sauce',
        'enjoy'
    ]
    return(
        <div id='mealDetails'>
            <div id='imgDiv'>
                <img id='mealImg' alt='plate of spaghetti' src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg"></img>
            </div>
           
            <div id='detailsContainer'>
                <div id='detailTabs'>
                    <div className='tab' id='detailsTab'>Details Tab</div>
                    <div className='tab' id='ingredientsTab'>Ingredients Tab</div>
                    <div className='tab' id='instructionsTab'>Instructions Tab</div>
                </div>

                <div id ='pages'>
                    <div className='page' id='detailsPage'>Details Page
                        <div className='detailItems' id='MDName' >Name</div>
                        <div className='detailItems' id='MDPrep' >Prep</div>
                        <div className='detailItems' id='MDCook' >Cook</div>
                        <div className='detailItems' id='MDTotal' >Total</div>
                    </div>
                    <div className='page' id='ingredientsPage'>Ingredients Page
                        <div id='MDIngredientsList' >
                            {
                                ingredients.map((el, i)=>{
                                    return(
                                        <div className='ingredient' key={`${i}`}>
                                            <div className='ingredientDetails' key={`ingredient${i}`}><strong>{`${el.ingredient}`}</strong></div>
                                            <div className='ingredientDetails' key={`measure${i}`}>{`${el.measurement.amount} ${el.measurement.amount > 1 ? el.measurement.type + 's': el.measurement.type} `}</div>
                                            <div className='ingredientDetails' key={`prep${i}`}>{`(${el.prepStyle})`}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='page' id='instructionsPage'>Instructions Page
                        <div id='intructionsList' >Intructions List
                            {
                                instructions.map((el, i)=>{
                                    return(
                                        <div key={`ins${i}`}><strong>Step{i + 1}</strong>{`${el}`}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}