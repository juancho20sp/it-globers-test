import React, { useState, useEffect } from 'react'
import './styles.scss';

import { GiHamburgerMenu } from 'react-icons/gi';

type MenuItem = {
    id: number;
    name: string;
}

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

    const handleClick = (): void => {
        console.log('burger clicked')

        const newShowMenu = !showMenu;
        setShowMenu(newShowMenu);
    }



    return (
        <nav className="navbar">
            <ul>
                {menuItems.map((item: MenuItem) => (
                    <li className={showMenu ? '' : 'hide'} key={item.id}>{item.name}</li>))}
            </ul>

            <span className="icon" onClick={() => handleClick()}>
                <GiHamburgerMenu />
            </span>
        </nav >
    )
}

export default Menu
