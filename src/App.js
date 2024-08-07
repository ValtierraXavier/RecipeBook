import './App.css';
import React, {useState} from 'react';
import Drawer from './Components/NavDrawer/Drawer/Drawer.jsx'
import { SliderContext } from './Context/Contexts.js';
import MenuTab from './Components/MenuTab/MenuTab.jsx';

function App() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="App">
      <SliderContext.Provider value={{open, setOpen}}>
        <Drawer/>
        <MenuTab/>
      </SliderContext.Provider>
    </div>
  );
}

export default App;
