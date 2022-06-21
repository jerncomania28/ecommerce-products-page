import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
//assets 
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Avatar from "../../assets/image-avatar.png";

//components
import CartIcon from "../../components/cartIcon";
import Cart from "../../components/cart";
import MenuBtn from "../../components/mobile-menuBtn";


const Navigation = () => {
    // retrieve  value from store.
    const isCartOpen = useSelector((state) => state.core.isCartOpen);

    //navigation menu array 
    const NAV_MENU = ["Collections", "Man", "Woman", "About", "Contact"];

    return (
        <>
            <div className="navigation">
                <div className="navigation__container">
                    <div className="navigation__mini">

                        <MenuBtn NAV_MENU={NAV_MENU} />

                        <Logo className="logo" />
                        <div className="menu">
                            {
                                NAV_MENU.map((menuItem, index) => {
                                    return <Link key={index} className="menu__item" to={`/${menuItem.toLowerCase()}`}>{menuItem}</Link>
                                })
                            }
                        </div>
                    </div>
                    <div className="profile">
                        <CartIcon />
                        <div className="profile__picture">
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