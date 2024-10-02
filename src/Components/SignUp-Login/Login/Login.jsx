import { useState } from 'react';
import './Login.css';

const Login = ({formReference, setLastInputFieldBeforeClick}) => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const changeData = (event) => {
        setLoginData((preValue) => {
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
                loginPage: event.target.name
            }
        });
    }

    const submitForm = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <div className='loginContainer'>
                <h1>LOGIN</h1>
                <div className='loginFormContainer'>
                    <form onSubmit={submitForm}>
                        <div className='usernameContainer'>
                            <label for="username">Username : </label>
                            <input type="text" name="username" value={loginData.username} onChange={changeData} ref={(el) => formReference.current['username'] = el} onFocus={setFocusableElement}/>
                        </div>
                        <div className='passwordContainer'>
                            <label for="password">Password : </label>
                            <input type="password" name="password" value={loginData.password} onChange={changeData} ref={(el) => formReference.current['password'] = el} onFocus={setFocusableElement}/>
                        </div>
                        <div className='loginButtonContainer'>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;