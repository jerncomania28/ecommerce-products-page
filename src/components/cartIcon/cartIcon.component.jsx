import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../states/core";
//assets
import { ReactComponent as CartIconAsset } from "../../assets/icon-cart.svg";


const CartIcon = () => {
    //retrieve data frm global state 
    const isCartOpen = useSelector((state) => state.core.isCartOpen);
    // calls function from global store 
    const dispatch = useDispatch();

    const handleCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (

        <div className="cart-icon" onClick={handleCartOpen}>
            <CartIconAsset className="cart-icon-asset" />
            <div className="cart-item-count">200</div>

        </div>

    )
}


export default CartIcon;