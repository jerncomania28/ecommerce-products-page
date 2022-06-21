import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../states/core";
//assets
import { ReactComponent as CartIconAsset } from "../../assets/icon-cart.svg";


const CartIcon = () => {
    //retrieve data frm global state 
    const isCartOpen = useSelector((state) => state.core.isCartOpen);

    const carts = useSelector((state) => state.carts.items);
    // calls function from global store 
    const dispatch = useDispatch();

    const handleCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (

        // cart icon component
        <div className="cartLogo" onClick={handleCartOpen}>
            <CartIconAsset className="cartLogo__asset" />

            {
                // displays count of items in the cart I
                carts.length ?
                    <div className="cartLogo--count">200</div> : null
            }

        </div>

    )
}


export default CartIcon;