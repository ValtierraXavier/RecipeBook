import React, { useContext } from "react";
import './SignUp.css'
import * as User from '../../../Services/userServices/userServices.js'
import { SignupFormContext } from "../../../Context/Contexts.js";

export default function SignUp (){

    const{signupForm, setSignupForm} = useContext(SignupFormContext)

    const handleChange = (e) => {
        e.preventDefault()
        const formValues = {
            ...signupForm,
            [e.target.name]: e.target.value
        }
        setSignupForm(prev => prev = formValues)
    }

    const handleSubmit = async () => {
        await User.newUser(signupForm)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))

    }
    return(
        <form className='authForm' id='signUpPage'>
            <p>SignUp</p>
            <label  htmlFor="signupName" >Name</label>
            <input type='text' className = "authInput" id='signupName' name='name' onChange={handleChange} value={signupForm?.name}/> 
            <label  htmlFor="signupUsername" >Username</label>
            <input type='text' className = "authInput" id='signupUsername' name='userName' onChange={handleChange} value={signupForm?.userName}/> 
            <label  htmlFor="signupPassword" >Password</label>
            <input type='text' className = "authInput" id='signupPassword' name='password' onChange={handleChange} value={signupForm?.password}/> 
            <label  htmlFor="signupConfirmPW">Confirm Password</label>
            <input type='text' className = "authInput" id='signupConfirmPW' name='confirmPW' onChange={handleChange} value={signupForm?.confirmPW}/> 
            <input type='button' onClick={handleSubmit} value='Sign Up!' />
        </form>
    )
}