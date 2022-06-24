import { useDispatch } from "react-redux";

import { addProductsToCart, removeProductsFromCart } from "../../states/carts";

//assets 

import IconPlus from "../../assets/icon-plus.svg";
import IconMinus from "../../assets/icon-minus.svg";
import IconCart from "../../assets/icon-cart.svg";

const Content = ({ product }) => {

    const dispatch = useDispatch();

    const handleAddToCart = () => {

        dispatch(addProductsToCart(product));
    }
    const handleRemoveFromCart = () => {
        dispatch(removeProductsFromCart(product));
    }



    const { companyName, name, description, price, percentage, previousPrice } = product;
    return (
        <div className="content">
            <small className="content__company-name">{companyName}</small>
            <h1 className="content__header">{name}</h1>
            <p className="content__text">{description}</p>
            <div className="content--price">
                <div className="box">
                    <h1 className="box__price">{`$${price}.00`}</h1>
                    <small className="box__percentage">{`${percentage}%`}</small>
                </div>
                <p className="content--price__previous">{`$${previousPrice}.00`}</p>
            </div>

            <div className="content--fn ">
                <div className="content--fn__controls">
                    <div className="content--fn__icon" onClick={handleRemoveFromCart}>
                        <img src={IconMinus} alt="icon-minus" />
                    </div>
                    <div className="content--fn__quantity">
                        1
                    </div>
                    <div className="content--fn__icon" onClick={handleAddToCart}>
                        <img src={IconPlus} alt="icon-plus" />
                    </div>
                </div>
                <div className="content--fn__cart-btn" onClick={handleAddToCart}>
                    <img src={IconCart} alt="cart-icon" />
                    <span> Add To Cart</span>
                </div>

            </div>
        </div>




    )
}

export default Content;