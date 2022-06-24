import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart, cartTotal } from "../../states/carts";

//assets
import IconDelete from "../../assets/icon-delete.svg";

const Cart = () => {

    const carts = useSelector((state) => state.carts.items);
    const total = useSelector((state) => state.carts.total);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartTotal());

    }, [carts, dispatch])


    return (
        <div className="cart-container">
            <h1> Cart</h1>

            {/* cart container  . holds all added items --start */}
            <div className={carts.length ? "cart-items__container cart-items__container--flow" : "cart-items__container"}>
                {
                    carts.length ? carts.map(cartItem => {
                        const { images, name, price, quantity } = cartItem;

                        const handleDeleteProduct = () => {
                            dispatch(deleteProductFromCart(cartItem))
                        }
                        return (

                            <div className="cart-item" key={cartItem.id}>

                                <div className="cart-item__image">
                                    <img src={images[0]} alt="cart-item.img" />
                                </div>
                                <div className="cart-item__content">
                                    <h3 className="cart-item__title">{name}</h3>
                                    <p className="cart-item__value">{`$${price} X ${quantity}`}</p>

                                </div>
                                <div className="cart-item__delete-btn"  >
                                    <img src={IconDelete} alt="delete-item.img" onClick={handleDeleteProduct} />
                                </div>

                            </div>
                        )

                    }) : <div className="empty">cart is empty!</div>
                }
                <div className="cart-items__total">Total : {`$${total}`}</div>
            </div>

            {
                // displays checkout button if there are items present in cart  
                carts.length ?
                    <div className="checkout-btn" role="button">
                        Checkout
                    </div> : null
            }

        </div >
    )
}


export default Cart;