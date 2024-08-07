import './App.css';
import React, {useState} from 'react';
import Drawer from './Components/NavDrawer/Drawer/Drawer.jsx'
import { SliderContext } from './Context/SliderContext.js';
import HamburgerButton from './Components/NavDrawer/HamburgerButton/Button.jsx';

function App() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="App">
      <SliderContext.Provider value={{open, setOpen}}>
        {/* <HamburgerButton/> */}
        <Drawer/>
      </SliderContext.Provider>
    </div>
  );
}

export default App;
