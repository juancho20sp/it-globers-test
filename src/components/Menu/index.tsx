import React, { useState, useEffect } from 'react'
import './styles.scss';

import { GiHamburgerMenu } from 'react-icons/gi';

// Types
import { MenuItem } from '../../utils/interfaces/menuItem';
import { useDispatch, useSelector } from 'react-redux';

import { SET_MENU_OPTION } from '../../redux/types';
import { getMenuOption } from '../../redux/actions/menu.actions';
import { GlobalState } from '../../utils/interfaces/globalState';

// type MenuItem = {
//     id: number;
//     name: string;
// }

export const Menu: React.FC = () => {
    // Declaramos los elementos del menú
    // Se cambia la estructura de {[id, name]} a [{id, name}]
    // Para facilitar el tipado y manejar un arreglo de objetos respetando la estructura de un archivo JSON
    const menuItems: MenuItem[] = [
        {
            id: 1,
            name: 'Test 1'
        },
        {
            id: 2,
            name: 'Test 2'
        },
        {
            id: 3,
            name: 'Test 3'
        },
        {
            id: 4,
            name: 'Test 4'
        }

    ]


    const [showMenu, setShowMenu] = useState(true);

    const [width, setWidth] = useState(window.innerWidth);

    const dispatch = useDispatch();

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
        console.log('burger clicked')

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
            payload: {
                id: 1,
                name: 'Test 1'
            }
        })
    }, [dispatch])

    const selectedOption = useSelector((state: GlobalState) => state.menuItem);


    useEffect(() => {
        dispatch(getMenuOption());

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

export default Menu
