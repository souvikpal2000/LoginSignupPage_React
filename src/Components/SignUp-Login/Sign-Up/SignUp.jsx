import { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const changeData = (event) => {
        setSignupData((preValue) => {
            return{
                ...preValue,
                [event.target.name]: event.target.value
            }
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <div className='signUpContainer'>
                <h1>SIGN UP</h1>
                <div className='signUpFormContainer'>
                    <form onSubmit={submitForm}>
                        <div className='usernameContainer'>
                            <label for="username">Username : </label>
                            <input type="text" name="username" value={signupData.username} onChange={changeData}/>
                        </div>
                        <div className='passwordContainer'>
                            <label for="password">Password : </label>
                            <input type="password" name="password" value={signupData.password} onChange={changeData}/>
                        </div>
                        <div className='confirmPasswordContainer'>
                            <label for="password">Confirm Password : </label>
                            <input type="password" name="confirmPassword" value={signupData.confirmPassword } onChange={changeData}/>
                        </div>
                        <div className='signupButtonContainer'>
                            <button>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;