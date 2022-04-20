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
    height: 200px;
    border: 2px solid ${({ theme }) => theme.backgroundColors.secondary};
    z-index: 3;
    background-color: whitesmoke;
    border-radius: 0 0 8px 8px;
`;

export const Exit = styled.span`

    strong {
        cursor: pointer;
        display: inline-block;
    }

    text-align: end;
    display: block;
    background-color: ${({ theme }) => theme.backgroundColors.main};
    padding: 5px;
    height: fit-content;
    width: 100%;
`;

export const ModalContent = styled.div`
    text-align: center;

    p {
        margin-top: 10%;
        font-size: 0.85em;
    }

    & > div {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
    }
`;