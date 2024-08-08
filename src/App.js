import './App.css';
import React, {useState} from 'react';
import Drawer from './Components/NavDrawer/Drawer/Drawer.jsx'
import MealDetails from './Components/MealDetails/MealDetails.jsx';
import { SliderContext, MenuContext } from './Context/Contexts.js';

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

  
  return (
    <div className="App">
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
