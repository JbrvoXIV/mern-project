import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 300px;
    border: 2px solid red;
    z-index: 3;
    background-color: whitesmoke;
`;

export const Exit = styled.span`
    text-align: end;
    display: block;
    cursor: pointer;
    background-color: gray;
    padding: 5px;
`;