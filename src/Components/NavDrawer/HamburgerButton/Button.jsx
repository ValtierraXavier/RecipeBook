import './Button.css'
import React, {useEffect, useContext} from 'react'
import { SliderContext, MenuContext } from '../../../Context/Contexts.js'

export default function HamburgerButton(){
    const {open,setOpen} = useContext(SliderContext)
    const {menuOpen,setMenuOpen} = useContext(MenuContext)
    let check = document.getElementById('check')
    const whichMenu = () => {
            if(menuOpen){
                check.checked = true
                setMenuOpen(prev => prev = false)
                return
            }
            setOpen(prev => prev = open ?  false : true)
        }
    
    useEffect(()=>{},[open])
    return(
        <div>
            <input type='checkbox' id='check' onClick={()=>{
                whichMenu()
            }}></input>
            <label htmlFor='check' id='hamButton'>
                <div className='iconDiv' id = 'upper'></div>
                <div className='iconDiv' id = 'middle'></div>
                <div className='iconDiv' id = 'bottom'></div>
            </label>
        </div>
    )
}