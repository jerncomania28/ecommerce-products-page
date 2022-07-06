import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Auth Function
import { signOutUser, onAuthChangedListener } from "../../utils/firebase";

//icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// helper Functions 

import { setIsLoggedIn, setIsProfileOpen, setIsCartOpen } from "../../states/core";
// components
import CartIcon from "../cartIcon";





const CartProfile = () => {

    const dispatch = useDispatch();

    const userLoggedIn = useSelector((state) => state.core.isLoggedIn);
    const isProfileOpen = useSelector((state) => state.core.isProfileOpen);


    const handleProfileOpen = () => {
        dispatch(setIsProfileOpen(!isProfileOpen));
        dispatch(setIsCartOpen(false));
    }


    console.log(userLoggedIn, "before useEffect Call");

    useEffect(() => {

        const unsubscribeFn = () => {
            const unsubscribe = onAuthChangedListener((user) => {
                // console.log(user);
                const _ac = user ? true : false;
                dispatch(setIsLoggedIn(_ac));

            })

            return unsubscribe;

        }

        unsubscribeFn();
    }, [dispatch]);






    return (
        <div className="profile">
            <CartIcon />
            <div className="profile-box" onClick={handleProfileOpen}>
                <FontAwesomeIcon icon="fa-user" className="profile-box__user" />
                <FontAwesomeIcon icon={isProfileOpen ? "fa-caret-up" : "fa-caret-down"} className="profile-box__caret" />
            </div>

            {
                isProfileOpen && (

                    <div className="profile-auth">

                        {
                            userLoggedIn ? <button type="button" onClick={signOutUser}>Log Out</button> : (
                                <>
                                    <Link to="/auth/signIn" className="profile__signIn" onClick={handleProfileOpen}>Sign In </Link>

                                    <Link to="/auth/signUp" className="profile__signUp" onClick={handleProfileOpen}>Sign Up</Link>
                                </>)
                        }
                    </div>

                )
            }

        </div>
    )
}


export default CartProfile;