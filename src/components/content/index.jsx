
//assets 

import IconPlus from "../../assets/icon-plus.svg";
import IconMinus from "../../assets/icon-minus.svg";
import IconCart from "../../assets/icon-cart.svg";

const Content = ({ product }) => {

    const { companyName, name, description, price, percentage, previousPrice } = product;
    return (
        <div className="content">
            <div className="content-mini">
                <small className="content-mini__company-name">{companyName}</small>
                <h1 className="content-mini__header">{name}</h1>
                <p className="content-mini__text">{description}</p>
                <div className="content-mini--price">
                    <div className="box">
                        <h1 className="box__price">{price}</h1>
                        <small className="box__percentage">{percentage}</small>
                    </div>
                    <p className="content-mini--price__previous">{previousPrice}</p>
                </div>

                <div className="content-mini--fn ">
                    <div className="content-mini--fn__controls">
                        <img src={IconMinus} alt="icon-minus" />
                        <small> 1</small>
                        <img src={IconPlus} alt="icon-plus" />
                    </div>
                    <div className="content-mini--fn__cart-btn">
                        <img src={IconCart} alt="cart-icon" />
                        <span> Add To Cart</span>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default Content;