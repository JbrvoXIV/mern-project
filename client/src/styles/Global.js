import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
    backgroundColors: {
        main: '#5188FF',
        secondary: '#ED431C'
    },
    fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700'
    }
}

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
    
    #root {
        min-height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        background-color: rgb(245, 245, 245);
    }
    
    html,
    body {
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
    }
`

export const Container = styled.div`

    width: 1400px;
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

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundColors.main};
    border-radius: 0 0 15px 15px;

    h1 {
        font-size: 3em;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        letter-spacing: 2px;
        margin: 0;
        padding: 20px 0;
        text-align: center;
        color: white;
        height: fit-content;
        cursor: default;
    }
`

export const FormStyled = styled.form`

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 20px;

    fieldset {
        margin-bottom: 20px;
    }
`

export const InputStyled = styled.input`
    display: block;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    text-indent: 5px;
    border: 1px solid lightgrey;
    margin-bottom: 10px;
    
    &:focus {
        outline: 1.5px solid lightgrey;
    }

    &[type="submit"] {
        width: 200px;
        min-width: 120px;
        margin: 0 auto;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        color: whitesmoke;
        border-radius: 3px;
        border: none;
        background-color: rgb(237, 67, 28);
        cursor: pointer;

        &:hover {
            background-color: rgb(217, 47, 8);
        }

        &:active {
            transform: scale(0.95);
        }
    }

    &[type="radio"] {
        display: inline-block;
        margin: 0;
        margin-right: 5px;
        vertical-align: middle;
        height: fit-content;
        width: fit-content;
    }
`
export const LabelStyled = styled.label`
    opacity: 0.7;
    font-size: 0.8em;
    letter-spacing: 0.1px;
    margin-right: 5px;
    font-weight: 500;
    width: fit-content;

    &[for="family"] {
        float: right;
    }
`