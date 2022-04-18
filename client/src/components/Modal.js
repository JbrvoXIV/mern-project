import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalOverlay } from '../styles/Modal.styled';

const Modal = () => {

    return createPortal(
        <div>
            <Overlay>
                <ModalOverlay>
                    Modal
                </ModalOverlay>
            </Overlay>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;