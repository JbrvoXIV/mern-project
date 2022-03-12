import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    #root {
        height: 100vh;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 1000px;
    max-width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 auto;
`

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const HeaderStyled = styled.header`

    background-color: salmon;
    width: 100%;
    border-radius: 0 0 10px 10px;
    text-align: center;
    margin-bottom: 20px;

    h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 0;
        padding: 20px 0;
    }
`

export const FormStyled = styled.form`

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    label {
        margin-right: 5px;
    }
`

export const InputStyled = styled.input`
    display: block;
    height: 20px;
    width: 300px;

    &[type="submit"] {
        height: 30px;
        width: 100px;
        margin: 0 auto;
        margin-top: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
    }
`