import React from 'react'
import './styles.scss';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';

export const Layout: React.FC = ({ children }) => {
    return (
        <div className="container">
            <Menu />
            {children}
            <Footer />
        </div>
    )
}


