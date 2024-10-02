import { useState } from 'react';
import './SignUp.css';

const SignUp = ({formReference, setLastInputFieldBeforeClick}) => {
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
        });
    }

    const setFocusableElement = (event) => {
        setLastInputFieldBeforeClick((preValue) => {
            return{
                ...preValue,
                signupPage: event.target.name
            }
        });
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
                            <input type="text" name="username" value={signupData.username} onChange={changeData} ref={(el) => formReference.current['username'] = el} onFocus={setFocusableElement}/>
                        </div>
                        <div className='passwordContainer'>
                            <label for="password">Password : </label>
                            <input type="password" name="password" value={signupData.password} onChange={changeData} ref={(el) => formReference.current['password'] = el} onFocus={setFocusableElement}/>
                        </div>
                        <div className='confirmPasswordContainer'>
                            <label for="password">Confirm Password : </label>
                            <input type="password" name="confirmPassword" value={signupData.confirmPassword } onChange={changeData} ref={(el) => formReference.current['confirmPassword'] = el} onFocus={setFocusableElement}/>
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