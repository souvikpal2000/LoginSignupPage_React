import { useState } from 'react';
import BlackBackground from '../BlackBackground/BlackBackground';
import Login from './Login/Login';
import SignUp from './Sign-Up/SignUp';
import './SignUpLogin.css';

const SignUpLogin = () => {
    const [choice, setChoice] = useState({
        userClick: "Login",
        navigateToOtherSection: "Signup"
    });

    const loginBackgroundStyle = {
        left: "0",
        right: "50%"
    }

    const signupBackgroundStyle = {
        right: "0",
        left: "50%"
    }

    return(
        <>
            <div className="signUpLoginContainer">
                <SignUp/>
                <Login/>
                {choice.userClick === "Login" ?
                    <BlackBackground choice={choice} setChoice={setChoice} dynamicStyling={loginBackgroundStyle} /> :
                    <BlackBackground choice={choice} setChoice={setChoice} dynamicStyling={signupBackgroundStyle} />
                }    
            </div>
        </>
    )
}

export default SignUpLogin;