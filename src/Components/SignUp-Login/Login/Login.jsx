import { useState } from 'react';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const changeData = (e) => {
        setLoginData((preValue) => {
            return{
                ...preValue,
                [e.target.name]: e.target.value  
            }
        })
    }

    return(
        <>
            <div className='loginContainer'>
                <h1>LOGIN</h1>
                <div className='loginFormContainer'>
                    <form>
                        <div className='usernameContainer'>
                            <label for="username">Username : </label>
                            <input type="text" name="username" value={loginData.username} onChange={changeData}/>
                        </div>
                        <div className='passwordContainer'>
                            <label for="password">Password : </label>
                            <input type="password" name="password" value={loginData.password} onChange={changeData}/>
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