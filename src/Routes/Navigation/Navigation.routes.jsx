import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
//assets 
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Avatar from "../../assets/image-avatar.png";

//components
import CartIcon from "../../components/cartIcon/cartIcon.component";
import Cart from "../../components/cart/cart.component";
import MenuBtn from "../../components/mobile-menuBtn/menuBtn.component";


const Navigation = () => {
    // retrieve  value from store.
    const isCartOpen = useSelector((state) => state.cartOpen.value.isCartOpen);

    //navigation menu array 

    const NAV_MENU = ["Collections", "Man", "Woman", "About", "Contact"];

    return (
        <>
            <div className="navigation-bar">
                <div className="navigation-bar_container">
                    <div className="navigation-bar_container_mini">

                        <MenuBtn NAV_MENU={NAV_MENU} />

                        <Logo className="logo" />
                        <div className="nav_menu">
                            {
                                NAV_MENU.map((menuItem, index) => {
                                    return <Link key={index} className="nav_menu-item" to={`/${menuItem.toLowerCase()}`}>{menuItem}</Link>
                                })
                            }
                        </div>
                    </div>
                    <div className="cart-profile">
                        <CartIcon />
                        <div className="profile-picture">
                            <img src={Avatar} alt={"profile-assets"} />
                        </div>
                    </div>
                </div>
                {
                    isCartOpen && <Cart />
                }
            </div>
            <Outlet />
        </>
    )
}

export default Navigation;