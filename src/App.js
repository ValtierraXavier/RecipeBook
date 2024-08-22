import './App.css';
// import Outlet from 'react-router-dom'
import React, {useState} from 'react';
import Drawer from './Components/NavDrawer/Drawer/Drawer.jsx'
import MealDetails from './Components/MealDetails/MealDetails.jsx';
import { SliderContext, MenuContext } from './Context/Contexts.js';
import { getAllIngredients } from './Services/ingredientServices/ingredientsServices.js'
import { getAllUsers } from './Services/userServices/userServices.js';
import { getAllRecipes } from './Services/recipeServices/recipeServices.js';

function App() {
  //state for nav menu. (boolean)
  const [open, setOpen] = useState(false)
  //state for menu list. (boolean)
  const [menuOpen, setMenuOpen] = useState(false)
  //closes nav list and all associated sub-menues if there is a click outside their internal area. (right of the right-side of the nav)
  document.addEventListener('click', (e) =>{
    const nav = document.getElementById('drawer').getBoundingClientRect()
    const navMenuCheck = document.getElementById('check')
    if(e.clientX > nav.right && nav.right > 0 ){
      //makes sure the nav button doesnt remain checked (checkbox hack; usually triggered onClick)
      navMenuCheck.checked = false
      setOpen(prev => prev = false)
      setMenuOpen(prev => prev = false)
    }
  })
  const printAllIngredients = async () => {
    await getAllIngredients()
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
  }  
  const printAllUsers = async () => {
    await getAllUsers()
    .then(response => {console.log(response)})
    .catch(error => {console.log(error)})
  }
  const printAllRecipes = async () => {
    await getAllRecipes()
    .then(response => {console.log(response)})
    .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <button onClick={printAllIngredients}>Print Ingredients</button>
      <button onClick={printAllRecipes}>Print Recipes</button>
      <button onClick={printAllUsers}>Print Users</button>
      <SliderContext.Provider value={{open, setOpen}}>
        <MenuContext.Provider value = {{menuOpen, setMenuOpen}}>
          <Drawer/>
          <MealDetails/>
        </MenuContext.Provider>
      </SliderContext.Provider>
    </div>
  );
}

export default App;
