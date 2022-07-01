import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
//assets 
import { ReactComponent as Logo } from "../../assets/logo.svg";

//components
import CartProfile from "../../components/cart-profile";
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

                        <Link to="/"><Logo className="logo" /></Link>
                        <div className="menu">
                            {
                                NAV_MENU.map((menuItem, index) => {
                                    return <Link key={index} className="menu__item" to={`/${menuItem.toLowerCase()}`}>{menuItem}</Link>
                                })
                            }
                        </div>

                    </div>

                    <CartProfile />

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