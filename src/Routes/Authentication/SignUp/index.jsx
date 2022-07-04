import { useState } from "react";

//icons 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// authentication Fns
import { createUserViaEmailAndPassword, createUserDocWithAuth } from "../../../utils/firebase";

const SignUp = () => {

    const defaultInput = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }


    const [errorMessage, setErrorMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = useState(false);

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

    const handleIsConfirmVisible = () => {

        setIsConfirmVisible(!isConfirmVisible)

    }

    // remove error Message 

    const removeErrorMessage = () => {

        setErrorMessage("");
    }

    // Destructure Values
    const { firstName, lastName, email, password, confirmPassword } = formInput;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {

            setErrorMessage("Password Does Not Match");

            setTimeout(removeErrorMessage, 5000);
            return;

        } else {

            try {
                const { user } = await createUserViaEmailAndPassword(email, password);

                createUserDocWithAuth(user, { displayName: `${firstName} ${lastName}` });

                resetFormInput();
            } catch (err) {
                // if (err.code === "auth/invalid-email") {
                //     setErrorMessage("Your email address is Invalid");
                // }
                // console.log("error signing In", err.message);

                switch (err.code) {
                    case "auth/email-already-exists":
                        setErrorMessage("Email Already Exists");
                        break;
                    case "auth/invalid-email":
                        setErrorMessage("Your email address is Invalid ");
                        break;
                    default: console.log("error creating an account" , err.code);
                }
            }

        }



    }

    return (
        <div className="signUp">

            {
                errorMessage ?
                    (<div className="signUp__error">

                        <FontAwesomeIcon icon="fa-circle-exclamation" className="signUp__error--icon" />

                        <div className="signUp__error--text">
                            <h3>Error</h3>
                            <p> {errorMessage}</p>
                        </div>

                        <FontAwesomeIcon icon="fa-xmark" className="signUp__error--cancel" onClick={handleErrorDisplay} />

                    </div>) : null
            }




            <form className="signUp-form">

                <div className="signUp-form-displayName">

                    <div className="signUp-form-displayName__firstName">
                        <FontAwesomeIcon icon="fa-user" className="signUp-form-displayName__firstName--icon" />
                        <input type="text" placeholder="First Name" name="firstName" required onChange={handleChange} />
                    </div>

                    <div className="signUp-form-displayName__lastName">
                        <FontAwesomeIcon icon="fa-user" className="signUp-form-displayName__lastName--icon" />
                        <input type="text" placeholder="Last Name" name="lastName" required onChange={handleChange} />
                    </div>

                </div>




                <div className="signUp-form__email" >
                    <FontAwesomeIcon icon="fa-envelope" className="signUp-form__email--user" />
                    <input type="email" placeholder="Email" name="email" required onChange={handleChange} />
                </div>

                <div className="signUp-form__password">
                    <FontAwesomeIcon icon="fa-lock" className="signUp-form__password--lock" />
                    <input type={isVisible ? "text" : "password"} placeholder="Password" name="password" required onChange={handleChange} />
                    <FontAwesomeIcon icon={isVisible ? "fa-eye" : "fa-eye-slash"} onClick={handleIsVisible} className="signIn-form__password--visible" />
                </div>

                <div className="signUp-form__password signUp-form__password--confirm">
                    <FontAwesomeIcon icon="fa-lock" className="signUp-form__password--lock" />
                    <input type={isConfirmVisible ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" required onChange={handleChange} />
                    <FontAwesomeIcon icon={isConfirmVisible ? "fa-eye" : "fa-eye-slash"} onClick={handleIsConfirmVisible} className="signUp-form__password--visible" />
                </div>

                <button type="submit" onClick={handleSubmit} className="signUp-form__button "> create an account </button>


            </form >

        </div >
    )
}


export default SignUp;