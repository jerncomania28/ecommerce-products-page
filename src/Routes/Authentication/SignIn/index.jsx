import { async } from "@firebase/util";
import { useState } from "react";

// authentication Fns
import { signInViaEmailAndPassword } from "../../../utils/firebase";

const SignIn = () => {

    const defaultInput = {
        email: "",
        password: ""
    }


    // store users Input and Changes
    const [formInput, setFormInput] = useState(defaultInput);


    // handle form Input change 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
    }

    // Destructure Values
    const { email, password } = formInput;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await signInViaEmailAndPassword(email, password);

            console.log(response)
        } catch (err) {
            if (err.code === "auth/invalid-email") {
                console.log("invalid Email , This mail is not registered with us ");
            }
            console.log("error signing In", err.message);
        }

    }

    return (
        <div className="signIn">

            <form className="signIn-form">

                <input type="email" placeholder="Email" name="email" required onChange={handleChange} className="signIn-form__email" />

                <input type="password" placeholder="Password" name="password" required onChange={handleChange} className="signIn-form__password" />

                <button type="submit" onClick={handleSubmit}>Sign In </button>

            </form >

        </div>
    )
}


export default SignIn;