import './SignUp.css';

const SignUp = () => {
    return(
        <>
            <div className='signUpContainer'>
                <h1>SIGN UP</h1>
                <div className='signUpFormContainer'>
                    <form>
                        <div className='usernameContainer'>
                            <label for="username">Username : </label>
                            <input type="text" name="username"/>
                        </div>
                        <div className='passwordContainer'>
                            <label for="password">Password : </label>
                            <input type="password" name="password"/>
                        </div>
                        <div className='confirmPasswordContainer'>
                            <label for="password">Confirm Password : </label>
                            <input type="password" name="password"/>
                        </div>
                        <div className='loginButtonContainer'>
                            <button>Signup</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;