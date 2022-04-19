import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalOverlay, Exit } from '../styles/Modal.styled';

const Modal = () => {

    return createPortal(
        <div>
            <Overlay>
                <ModalOverlay>
                    <Exit><strong>X</strong></Exit>
                    <div>CONTENT</div>
                </ModalOverlay>
            </Overlay>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;