import React, { useState, useEffect } from 'react'
import './styles.scss';

// Types
import { MenuItem } from '../../utils/interfaces/menuItem';
import { GlobalState } from '../../utils/interfaces/globalState';

// Menu options
import { menuItems } from './options';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENU_OPTION } from '../../redux/types';
import { getMenuOption } from '../../redux/actions/menu.actions';


export const Menu: React.FC = () => {
    // Bring the selectedOptions from the global state
    const selectedOption = useSelector((state: GlobalState) => state.menuItem);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenuOption());
    }, [dispatch])

    // Control whether the menu must be shown or not
    const [showMenu, setShowMenu] = useState(true);

    // Control the width of the page in order to change the style of the menu
    const [width, setWidth] = useState(window.innerWidth);


    // Effect that listen to the changes on the width of the screen
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }

        if (width <= 920) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }

        window.addEventListener('resize', handleResize);

    }, [width])


    // If the burger is clicked, show the mobile menu
    const handleBurgerClick = (): void => {
        const newShowMenu = !showMenu;
        setShowMenu(newShowMenu);
    }

    // If a menu item is clicked, modify the global store
    const handleItemClick = (item: MenuItem) => {
        dispatch({
            type: SET_MENU_OPTION,
            payload: item
        })
    }

    // Preload the global store with the first menu item on the first render of the component
    useEffect(() => {
        dispatch({
            type: SET_MENU_OPTION,
            payload: menuItems[0]
        })
    }, [dispatch])


    return (
        <nav className="navbar">
            <ul>
                {menuItems.map((item: MenuItem) => (
                    <li className={`${showMenu ? '' : 'hide'} ${selectedOption.id === item.id ? 'active' : ''}`} key={item.id} onClick={() => handleItemClick(item)}>{item.name} </li>))}

            </ul>

            <span className="icon" onClick={() => handleBurgerClick()}>
                <GiHamburgerMenu />
            </span>
        </nav >
    )
}

export default Menu;
