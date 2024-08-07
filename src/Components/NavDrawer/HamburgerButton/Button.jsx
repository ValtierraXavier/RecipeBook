import './Button.css'
import React, {useState, useEffect, useContext} from 'react'
import { SliderContext } from '../../../Context/SliderContext.js'

export default function HamburgerButton(){
    const {open,setOpen} = useContext(SliderContext)
    useEffect(()=>{},[open])
    return(
        <div>
            <input type='checkbox' id='check' onClick={()=>{
                setOpen(prev => prev = open ? false : true)
            }}></input>
            <label htmlFor='check' id='hamButton'>
                <div className='iconDiv' id = 'upper'></div>
                <div className='iconDiv' id = 'middle'></div>
                <div className='iconDiv' id = 'bottom'></div>
            </label>
        </div>
    )
}