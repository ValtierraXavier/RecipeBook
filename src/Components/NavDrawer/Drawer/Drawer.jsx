import React, {useEffect,useContext} from 'react'
import './Drawer.css'
import HamburgerButton from '../HamburgerButton/Button.jsx'
import { SliderContext, MenuContext } from '../../../Context/Contexts.js'
import MenuTab from '../../MenuTab/MenuTab.jsx'

export default function Drawer() {
    const {open} = useContext(SliderContext)
    const {menuOpen, setMenuOpen} = useContext(MenuContext)
    let slider = document.getElementById('drawer')
    
    const navSlide = () => {
        if(slider){
            slider.style.left = open ? '0dvw' : '-25dvw'
        }
            return
    }
    
    useEffect(()=>{
        navSlide()
    })
  //add close on click outide element functionality.
  return (
    <div className='drawer' id='drawer'>
        <HamburgerButton/>
        <MenuTab/>
        <div className='drawerItems' id='menuButton' onClick={()=>{
            setMenuOpen(prev => prev = menuOpen ? false : true)
            }}>Menu</div>
        <div className='drawerItems' id='signIn'>Sign-In</div>
        <div className='drawerItems' id='settings'>Settings</div>
    </div>
  )
}
