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
        background-color: rgb(245, 245, 245);
    }

    html,
    body {
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`
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

    background-color: #D49696;
    width: 100%;
    border-radius: 0 0 10px 10px;
    text-align: center;
    margin-bottom: 20px;

    h1 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        margin: 0;
        padding: 20px 0;
        color: white;
    }
`

export const FormStyled = styled.form`

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    label {
        opacity: 0.7;
        font-size: 0.8em;
        letter-spacing: 0.1px;
        margin-right: 5px;
        font-weight: 500;
    }
`

export const InputStyled = styled.input`
    display: block;
    height: 30px;
    width: 300px;
    border-radius: 5px;
    border: 1px solid lightgrey;
    padding-left: 10px;

    &[type="text"]:focus {
        outline: 1.5px solid lightgrey;
    }

    &[type="submit"] {
        height: 30px;
        width: 100px;
        margin: 0 auto;
        margin-top: 10px;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;

        &:active {
            transform: scale(0.95);
        }
    }
`