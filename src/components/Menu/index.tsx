import React, { useState, useEffect } from 'react'
import './styles.scss';

import { MenuItem } from '../../utils/interfaces/menuItem';

import { menuItems } from './options';

import { GiHamburgerMenu } from 'react-icons/gi';

// Types
import { useDispatch, useSelector } from 'react-redux';

import { SET_MENU_OPTION } from '../../redux/types';
import { getMenuOption } from '../../redux/actions/menu.actions';
import { GlobalState } from '../../utils/interfaces/globalState';


export const Menu: React.FC = () => {
    const selectedOption = useSelector((state: GlobalState) => state.menuItem);

    const [showMenu, setShowMenu] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMenuOption());

    }, [dispatch])

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



    const handleBurgerClick = (): void => {
        const newShowMenu = !showMenu;
        setShowMenu(newShowMenu);
    }

    const handleItemClick = (item: MenuItem) => {
        dispatch({
            type: SET_MENU_OPTION,
            payload: item
        })
    }

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
