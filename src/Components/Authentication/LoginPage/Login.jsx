import React, {useContext} from 'react'
import './Login.css'
import { LoginFormContext } from '../../../Context/Contexts.js'
import { userLogin } from '../../../Services/userServices/userServices.js'

export default function LoginPage (){
    const {loginForm, setLoginForm} = useContext(LoginFormContext)

    const handleChange = (e) => {
        e.preventDefault()
        let formValues = {
            ...loginForm,
            [e.target.name]: e.target.value
        }
        setLoginForm(prev => prev = formValues)
    }

    const handleSubmit = async () => {
        await userLogin(loginForm)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
    }

    return(
        <form className='authForm' id='loginForm'>
            <p>Log In</p>
            <label htmlFor='loginUserName'>Username</label>
            <input className='authInput' id='loginUsername' name='userName' type='text' value={loginForm.userName} onChange={handleChange}></input>
            <label htmlFor='loginPassword'>Password</label>
            <input className='authInput' id='loginPassword' name='password' type='text' value={loginForm.password} onChange={handleChange}></input>
            <input className='authInput' type='button' value='Login!' onClick={handleSubmit}></input>
        </form>
    )
}