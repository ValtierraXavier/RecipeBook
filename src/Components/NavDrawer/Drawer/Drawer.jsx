import React, {useEffect,useContext} from 'react'
import './Drawer.css'
import HamburgerButton from '../HamburgerButton/Button.jsx'
import { SliderContext } from '../../../Context/Contexts.js'
import MenuTab from '../../MenuTab/MenuTab.jsx'

export default function Drawer() {
    const {open} = useContext(SliderContext)
    let slider = document.getElementById('drawer')

    const slide = () => {
        if(slider){
            slider.style.left = open ? '0dvw' : '-25dvw'
        }
            return
    }
    
    useEffect(()=>{
        slide()
    })
  //add close on click outide element functionality.
  return (
    <div className='drawer' id='drawer'>
        <HamburgerButton/>
        {/* <MenuTab/> */}
        <div className='drawerItems' id='menu'>Menu</div>
        <div className='drawerItems' id='signIn'>Sign-In</div>
        <div className='drawerItems' id='settings'>Settings</div>
    </div>
  )
}
