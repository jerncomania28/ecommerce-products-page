import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../states/core";
import { cartCount } from "../../states/carts";
//assets
import { ReactComponent as CartIconAsset } from "../../assets/icon-cart.svg";


const CartIcon = () => {
    //retrieve data frm global state 
    const isCartOpen = useSelector((state) => state.core.isCartOpen);
    const carts = useSelector((state) => state.carts.items);
    const count = useSelector((state) => state.carts.count);

    // calls function from global store 
    const dispatch = useDispatch();

    const handleCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    useEffect(() => {
        dispatch(cartCount())
    }, [carts, dispatch])

    return (

        // cart icon component
        <div className="cartLogo" onClick={handleCartOpen}>
            <CartIconAsset className="cartLogo__asset" />

            {
                // displays count of items in the cart I
                carts.length ?
                    <div className="cartLogo--count">{count}</div> : null
            }

        </div>

    )
}


export default CartIcon;