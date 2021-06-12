import React, { useState } from 'react'
import './styles.scss';

import { MainTitle } from '../../components/MainTitle';
import { Form } from '../../components/Form';
import { Modal } from '../../components/Modal';

export const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(true);

        setTimeout(() => {
            setIsFadingOut(true);
        }, 4500);
    }

    return (
        <div className="main">
            <MainTitle />
            <Form openModal={() => toggleModal()} />
            <Modal open={isModalOpen} onClose={() => { setIsModalOpen(false); setIsFadingOut(false) }} isFadingOut={isFadingOut}>
                <p>Tu información fue enviada con éxito, estaremos en contacto
                    contigo
                </p>
            </Modal>

            <button onClick={() => setIsModalOpen(!isModalOpen)}>toggle modal</button>
        </div>
    )
}


