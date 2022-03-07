import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html,
    body,
    #root {
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1000px;
    max-width: 100%;
    height: 100%;
    padding: 0 20px;
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`