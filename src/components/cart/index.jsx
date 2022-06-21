import { useSelector } from "react-redux";

const Cart = () => {

    const carts = useSelector((state) => state.carts.items)
    return (
        <div className="cart-container">
            <h1> Cart</h1>

            {/* cart container  . holds all added items --start */}
            <div className={carts.length ? "cart-items__container cart-items__container--flow" : "cart-items__container"}>
                {
                    carts.length ? carts.map(cartItem => {
                        return (
                            <div className="cart-item">
                                This is a Cart item
                            </div>
                        )
                    }) : <div className="empty">cart is empty!</div>
                }
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