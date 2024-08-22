import React, {useContext, useEffect} from 'react'
import { MenuContext } from '../../../Context/Contexts.js'
import './MenuTab.css'

export default function MenuTab(){
    const foods = [
        {
            id:1,
            Name: "Jollof",
            PrepTime: 50,
            CookTime: 10,
            Ingredients: ["Tomato", "Rice", "Beef", "Onion"],
            Instructions: "First make the stew...then boil the rice in it. blah blah...",
            Description: "A Staple of Ghana and Nigeria; this recipe is passed down from my grandmother and is made in the traditional Ghanian fashion."
        },
        {
            id:2,
            Name: "Rice & Beans",
            PrepTime: 50,
            CookTime: 30,
            Ingredients: ["Tomato Sauce", "Rice", "Beans"],
            Instructions: "First make the stew...then boil the rice in it but add beans this time blah blah...",
            Description: "A Staple of PuertoRican households, theres nothing more relaxing than sharing a plate with loved ones. goes great with some chuleta"
        },
        {
            id:3,
            Name: "Bacon, Egg and Cheese",
            PrepTime: 5,
            CookTime: 10,
            Ingredients: ["Tomato", "Rice", "Beef"],
            Instructions: "Grab some bread, fry an egg in your style...put the egg on the bread add slice of american cheese while the egg is still hot. Enjoy.",
            Description: "Classic American Breakfast Sandwich...delicious"
        }
    ]


    
    const {menuOpen} = useContext(MenuContext)
    const menuSlider = document.getElementById('menuList')

    const menuSlide = () => {
        if(menuSlider){
            menuSlider.style.left = menuOpen ? "0dvw" : "-25dvw"
        }
    }
    useEffect(()=>{menuSlide()})
    return(
        <div className='MenuList' id='menuList'>
            {foods?.map((el, i)=>{
                let time = el.CookTime + el.PrepTime,hours = Math.floor(time/60), mins = time % 60, formattedTime = time > 60? `${hours}h ${mins}m` : `${mins === 0 ? `${hours}h` : `${mins}m`}`
                return (
                <div className='mealCard' id={`meal${i}`} key={`mC${i}`}>
                    <input type='checkbox' className='FavoriteButton' id='favoriteCheck'></input>
                    <label id='favoriteButton' htmlFor='favoriteCheck'>Fave</label>
                    <h4  key={`mN${i}`} className='mealItems' id={`mealName${i}`}>{`${el.Name}`}</h4>
                    <div key={`mPT${i}`}  className='mealItems' id={`mealPrepTime${i}`}>{`Prep: ${el.PrepTime}mins`}</div>
                    <div key={`mCT${i}`}  className='mealItems' id={`mealCookTime${i}`}>{`Cook: ${el.CookTime}mins`}</div>
                    <div key={`tCT${i}`}  className='mealItems' id={`totalCookTime${i}`}><strong>{`Total:${formattedTime}`}</strong></div>
                    <div key={`iL${i}`}  className='mealItems ingredientsList' id={`ingredientsList${i}`}>
                        Ingredients:
                        {
                            el.Ingredients?.map((el, i)=>{
                                return(
                                    <p key={`i${i}`} className='ingredient' id={`ingredient${i}`}>{`${i + 1}-${el}`}</p>
                                )
                            })
                        }
                    </div>
                </div>
               )
            })}
        </div>
    )
}