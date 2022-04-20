import React from 'react';
import { createPortal } from 'react-dom';
import { InputStyled } from '../styles/Global';
import { Overlay, ModalOverlay, Exit, ModalContent } from '../styles/Modal.styled';

const Modal = (props) => {

    return createPortal(
        <div>
            <Overlay>
                <ModalOverlay>
                    <Exit><strong onClick={props.handleModal}>X</strong></Exit>
                    <ModalContent>
                        <p>ARE YOU SURE YOU WISH TO UPDATE USER?</p>
                        <div>
                            <InputStyled type='submit' value='SUBMIT' onClick={props.handleSubmit} />
                            <InputStyled type='submit' value='EXIT' onClick={props.handleModal} />
                        </div>
                    </ModalContent>
                </ModalOverlay>
            </Overlay>
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;