import { useRef, useState } from 'react';
import BlackBackground from '../BlackBackground/BlackBackground';
import Login from './Login/Login';
import SignUp from './Sign-Up/SignUp';
import './SignUpLogin.css';

const SignUpLogin = () => {
    const [choice, setChoice] = useState({
        userClick: "Login",
        navigateToOtherSection: "Signup"
    });
    
    const [lastInputFieldBeforeClick, setLastInputFieldBeforeClick] = useState({
        loginPage: "username",
        signupPage: "username"
    })

    const loginFormReference = useRef({});
    const signupFormReference = useRef({});

    const loginBackgroundStyle = {
        left: "0",
        right: "50%"
    }

    const signupBackgroundStyle = {
        left: "50%",
        right: "0"
    }

    return(
        <>
            <div className="signUpLoginContainer">
                <SignUp formReference={signupFormReference}
                        setLastInputFieldBeforeClick={setLastInputFieldBeforeClick}
                />

                <Login formReference={loginFormReference}
                        setLastInputFieldBeforeClick={setLastInputFieldBeforeClick}
                />

                {choice.userClick === "Login" ?
                    <BlackBackground choice={choice} setChoice={setChoice} 
                                        dynamicStyling={loginBackgroundStyle} 
                                        formReference={signupFormReference} 
                                        lastInputFieldBeforeClick={lastInputFieldBeforeClick}
                    /> :

                    <BlackBackground choice={choice} setChoice={setChoice} 
                                        dynamicStyling={signupBackgroundStyle} 
                                        formReference={loginFormReference} 
                                        lastInputFieldBeforeClick={lastInputFieldBeforeClick}
                    />
                }    
            </div>
        </>
    )
}

export default SignUpLogin;