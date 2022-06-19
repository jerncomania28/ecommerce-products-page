
//Redux-interaction Hooks 
import { useSelector, useDispatch } from "react-redux";
import { setIconMenu } from "../../states/core";
import { Link } from "react-router-dom";

//assets 
import IconMenu from "../../assets/icon-menu.svg";
import IconClose from "../../assets/icon-close.svg";


const MenuBtn = ({ NAV_MENU }) => {

    const dispatch = useDispatch();
    const isMenuOpen = useSelector((state) => state.core.iconMenu);

    const toggleMenu = () => {
        dispatch(setIconMenu(!isMenuOpen));
    }

    return (
        <div className="menu">

            <div className="menu-burger_open" onClick={toggleMenu}>
                <img src={IconMenu} alt="icon-menu" />
            </div>

            {
                isMenuOpen &&
                <div className="menu-items">
                    <div className="menu-burger_cancel" onClick={toggleMenu}>

                        <img src={IconClose} alt="icon-close" />

                    </div>
                    {
                        NAV_MENU.map((menuItem, index) => {
                            return <Link key={index} to={`/${menuItem}`} className="menu-item">{menuItem}</Link>
                        })

                    }

                </div>
            }


        </div>
    )
}


export default MenuBtn; 