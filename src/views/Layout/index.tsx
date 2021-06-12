import React from 'react'

import { Menu } from '../../components/Menu';
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';

export const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <Menu />
            {children}
            <Footer />
        </div>
    )
}


