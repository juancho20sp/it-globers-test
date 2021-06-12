import React, { useState } from 'react'

import { MainTitle } from '../../components/MainTitle';
import { Form } from '../../components/Form';
import { Modal } from '../../components/Modal';

export const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <MainTitle />
            <Form openModal={() => setIsOpen(true)} />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <p>Tu información fue enviada con éxito, estaremos en contacto
                    contigo
                </p>
            </Modal>

            <button onClick={() => setIsOpen(!isOpen)}>toggle modal</button>
        </div>
    )
}


