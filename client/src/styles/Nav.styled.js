import styled from "styled-components";

export const NavBar = styled.nav`
    
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColors.main};
    border-radius: 0 0 30% 30%;

    h1 {
        font-size: 3em;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        letter-spacing: 2px;
        margin: 0;
        padding: 20px 0;
        text-align: center;
        color: white;
        height: fit-content;
    }
`