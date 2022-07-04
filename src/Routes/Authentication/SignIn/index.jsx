import { useState } from "react";
import { Link } from "react-router-dom";

//icons 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// authentication Fns
import { signInViaEmailAndPassword, signInWithGooglePopUp, createUserDocWithAuth } from "../../../utils/firebase";

//assets 
import Google from "../../../assets/icon-google.svg";

const SignIn = () => {

    const defaultInput = {
        email: "",
        password: ""
    }


    const [errorMessage, setErrorMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    // store users Input and Changes
    const [formInput, setFormInput] = useState(defaultInput);


    // handle form Input change 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    }

    const resetFormInput = () => {

        setFormInput(defaultInput);

    }

    // remove error Display

    const handleErrorDisplay = () => {
        setErrorMessage("");
    }

    // password visible

    const handleIsVisible = () => {
        setIsVisible(!isVisible);
    }

    const logInWithGoogle = async () => {

        const { user } = await signInWithGooglePopUp();

        console.log(user, "sign in Page");
        createUserDocWithAuth(user);

    }

    // Destructure Values
    const { email, password } = formInput;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInViaEmailAndPassword(email, password);

            console.log(response)

            resetFormInput();
        } catch (err) {

            switch (err.code) {

                case "auth/invalid-password":
                    setErrorMessage("Your Password is Incorrect");
                    break;
                case "auth/invalid-email":
                    setErrorMessage("Your email address is Invalid ");
                    break;

                default : console.log("error signing In " , err.code);

            }

            // if (err.code === "auth/invalid-email") {
            //     setErrorMessage("Your email address is Invalid");
            // }
            // console.log("error signing In", err.message);
        }

    }

    return (
        <div className="signIn">

            {
                errorMessage ?
                    (<div className="signIn__error">

                        <FontAwesomeIcon icon="fa-circle-exclamation" className="signIn__error--icon" />

                        <div className="signIn__error--text">
                            <h3>Error</h3>
                            <p> {errorMessage}</p>
                        </div>

                        <FontAwesomeIcon icon="fa-xmark" className="signIn__error--cancel" onClick={handleErrorDisplay} />

                    </div>) : null
            }



            <form className="signIn-form">


                <div className="signIn-form__email" >
                    <FontAwesomeIcon icon="fa-envelope" className="signIn-form__email--user" />
                    <input type="email" placeholder="Email" name="email" required onChange={handleChange} />
                </div>

                <div className="signIn-form__password">
                    <FontAwesomeIcon icon="fa-lock" className="signIn-form__password--lock" />
                    <input type={isVisible ? "text" : "password"} placeholder="Password" name="password" required onChange={handleChange} />
                    <FontAwesomeIcon icon={isVisible ? "fa-eye" : "fa-eye-slash"} onClick={handleIsVisible} className="signIn-form__password--visible" />
                </div>

                <button type="submit" onClick={handleSubmit} className="signIn-form__button">Sign In </button>


                <div className="signIn-form__options">
                    <Link to="/" className="signIn-form__options--forgot">Forgot Password ? </Link>

                    <Link to="/auth/signUp" className="signIn-form__options--create"> create an account </Link>
                </div>

                <div className="signIn-form__demarcate">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>

                <div className="signIn-form__google" onClick={logInWithGoogle}>
                    <img src={Google} alt="google-icon" />

                    <div className="signIn-form__google--content">
                        LOG IN WITH GOOGLE
                    </div>

                </div>


            </form >

        </div >
    )
}


export default SignIn;