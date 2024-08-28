import React, { useState, useContext } from "react";
import "./EditPage.css";
import { measurmentContext } from "../../Context/Contexts.js";
import RemoveButton from './RemoveButton/RemoveButton.jsx'

export default function EditPage (){
    const[edits, setEdits] = useState({})
    const[ingredientEdits, setIngredientEdits] = useState({})
    const measureArr = useContext(measurmentContext)
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
        'Add pasta to sauce',
        'Enjoy'
    ]

    const handleChange = (e) => {
        e.preventDefault()
        const ingredientObject = {
            name: '',
            quantity: ''
        }
        if(e.target.className === ''){
            console.log(e.target.className)
        }
        const formObject = {
            ...edits,
            [e.target.name]: e.target.value
        }
        setEdits(prev => prev = formObject)
        console.clear()
        console.log(formObject)
    }

       return(
        //main container of the edit page ( look into using it as a modal instead. )
        <div id='editPage'>
            {/*the edit form several inputs from user to construct an 'edits Object'*/}
            <form id='editForm'>
            <h1 id="editTitle">Edit Recipe</h1>
                {/* input for recipe name edits */}
                <div className='field' id='nameField'>
                    <div>
                        <label className='fieldLabel' id='nameLabel' htmlFor='nameInput'>Name</label>
                        <input className='editInput' id='nameInput' type='text' name='name' onChange={handleChange} value={edits.title}/>
                    </div>
                </div>
                <div className="field" id='descriptionField'>
                    <div>
                        <label className='fieldLabel' htmlFor='descriptionInput'>Description</label>
                        <input className='editInput' id='descriptionInput' type='textarea' name='description' onChange={handleChange} value={edits.description}></input>
                    </div>
                </div>
                <div className='field' id="timeField">
                    <div>
                        <label className='fieldLabel' id='prepLabel' htmlFor='prepInput'>Prep Time</label>
                        <input className='editInput' id='prepInput' type='number' name='prepTime' onChange={handleChange} value={edits.prepTime}></input>
                    </div>
                    <div>
                        <label className='fieldLabel' id='cookLabel' htmlFor='cookInput'>Cook Time</label>
                        <input className='editInput' id='cookInput' type='number' name='cookTime' onChange={handleChange} value={edits.cookTime}></input>
                    </div>
                </div>
                <label className='fieldLabel' id='ingredientEditorLabel' htmlFor='ingredientList'>Ingredients:</label>
                <div className='Editors' id='ingredientEditor'>
                    <div className='Lists' id='ingredientList'>
                        {/* Maps through ingredients  and lists then down*/}
                            {
                                ingredients.map((ingredient, i)=>{
                                    return(
                                        <div key={`ingredientCard${i}`} className='Cards' id='ingredientCard'>
                                            <div key={`cardName${i}`} id='cardName'>
                                                {`${ingredient.ingredient}`}
                                            </div>
                                            <div key={`field${i}`}>
                                                <label htmlFor="quantityLabel" className='fieldLabel'>Quantity</label>
                                                <input type='number' className='editInput' id='quantityInput' name='quantity' onChange={handleChange}></input>
                                            </div>
                                            <div className='inputDiv'>
                                                <label htmlFor="ingredientUnit" className='fieldLabel'>Unit</label>
                                                <select className='editInput' name='unit' id='ingredientInput' onChange={handleChange}>
                                                    {
                                                        measureArr.map((unit, i)=>{
                                                            return(
                                                                <option key={`unitOption${i}`} className="ingredientOption" id='unitOption' value={unit}>
                                                                    {unit}
                                                                </option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div>
                                                <RemoveButton className='removeButton'/>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                </div>
                <label className='fieldLabel' id='instructionEditorLabel' htmlFor='instructionList'>Instructions:</label>
                <div className="Editors" id='instructionEditor'>
                    <div className="Lists" id='instructionList'>
                            <div className='Lists' id='instructionList'>
                                {
                                    instructions?.map((instruction, i)=> {
                                        return(
                                            <div key={`instructionCard${i}`} className='Cards' id='instructionCard'>
                                                <div key={`step#${i}`} id='cardName'>
                                                    {`Step${i + 1}`}
                                                </div>
                                                <div key={`instruction${i}`} id='instruction'>
                                                    <input className='editInput' id="instructionInput" type='textarea' key={`do${i}`} value={instruction}></input>
                                                </div>
                                                <div>
                                                    <RemoveButton className='removeButton'/>
                                                </div>
                                            </div>
                                        
                                        )
                                    })
                                }
                            </div>
                    </div>
                </div>
            </form>
        </div>
    )
}