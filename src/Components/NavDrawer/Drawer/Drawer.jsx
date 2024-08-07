import React, {useState, useEffect,useContext} from 'react'
import './Drawer.css'
import HamburgerButton from '../HamburgerButton/Button.jsx'
import { SliderContext } from '../../../Context/SliderContext.js'

export default function Drawer() {
    const {open, setOpen} = useContext(SliderContext)
    let slider = document.getElementById('drawer')
    const slide = () => {
        if(slider){
            slider.style.left = open ? '0dvw' : '-25dvw'
        }
            return
    }
    
    useEffect(()=>{
        slide()
    },[open])
  
  return (
    <div className='drawer' id='drawer'>
        <HamburgerButton/>
        <div className='drawerItems' id='menu'>Menu</div>
        <div className='drawerItems' id='signIn'>Sign-In</div>
        <div className='drawerItems' id='settings'>Settings</div>
    </div>
  )
}
