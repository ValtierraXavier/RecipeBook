import {createContext} from 'react'
//contexts go in here. 
export const SliderContext = createContext('false')
export const MenuContext = createContext('false')

export const LoginFormContext = createContext({
    userName:'',
    password: ''
})

export const SignupFormContext = createContext({
    name: '',
    userName: '',
    password: '',
    confirmPW: ''
})