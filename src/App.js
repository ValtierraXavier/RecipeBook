import './App.css';
import React, {useState} from 'react';
import Drawer from './Components/NavDrawer/Drawer/Drawer.jsx'
import { SliderContext, MenuContext } from './Context/Contexts.js';
// import MenuTab from './Components/MenuTab/MenuTab.jsx';

function App() {
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeNav = () => {
    setOpen(prev => prev = false)
    setMenuOpen(prev => prev = false)
  }
  document.addEventListener('click', (e) =>{
    const nav = document.getElementById('drawer').getBoundingClientRect()
    const check = document.getElementById('check')
    // console.log(nav.right)
    if(e.clientX > nav.right && nav.right > 0 ){
      check.checked = false
      closeNav()
    }
  })

  
  return (
    <div className="App">
      <SliderContext.Provider value={{open, setOpen}}>
        <MenuContext.Provider value = {{menuOpen, setMenuOpen}}>
          <Drawer/>
        {/* <MenuTab/> */}
        </MenuContext.Provider>
      </SliderContext.Provider>
    </div>
  );
}

export default App;
