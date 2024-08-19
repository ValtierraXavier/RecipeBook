import React, {useEffect, useState} from 'react'
import './MealDetails.css'

export default function MealDetails(){
    let [activePage, setActivePage] = useState('detailsTab')
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
    const fadeIn = async (ms) => {
        return new Promise(
            (resolve)=> setTimeout(resolve ,ms) 
        )
    }
    const pageSelect = async (id) => {
        const tabs = document.getElementsByClassName('tab')
        const pages = document.getElementsByClassName('page')
        const tabPageRel = {}
        for(let i = 0; i < tabs.length; i++){
            tabPageRel[tabs[i].id] = pages[i].id 
        }
        for(let t of tabs) {
            await fadeIn(100)
            .then(t.style.opacity = '100%')
            t.style.backgroundColor = id === t.id ? 'aqua': 'rgb(188, 242, 246)'
        }
        for(let p of pages) {
            p.style.opacity = p.id === tabPageRel[id] ? "100%" : '0%'
            p.style.zIndex = p.id === tabPageRel[id] ? "2" : '1'

        }
    }
    useEffect(()=>{
        pageSelect(activePage)
    },[activePage])
    return(
        <div id='mealDetails'>
            <div id='imgDiv'>
                <img id='mealImg' alt='plate of spaghetti' src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/6/12/3/FNM070116_Penne-with-Vodka-Sauce-and-Mini-Meatballs-recipe_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1465939620872.jpeg"></img>
            </div>
           
            <div id='detailsContainer'>
                <div id='detailTabs'>
                    <div className='tab' id='detailsTab' onClick={e=>setActivePage(prev => prev = e.target.id)}>Details Tab</div>
                    <div className='tab' id='ingredientsTab' onClick={e=>setActivePage(prev => prev = e.target.id)}>Ingredients Tab</div>
                    <div className='tab' id='instructionsTab' onClick={e=>setActivePage(prev => prev = e.target.id)}>Instructions Tab</div>
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