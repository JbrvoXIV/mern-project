import styled from "styled-components";

export const DataStyled = styled.section`
    
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    table {
        margin-top: 20px;
        border: 1px solid black;
        border-collapse: collapse;
        color: black;
        
        th, td {
            padding: 10px;
            border: 1px solid black;
            min-width: 150px;
            text-align: center;
        }

        th {
            background-color: rgb(110, 180, 180);
        }

        td {
            background-color: rgb(150,212,212);
        }

    }

    p {
        font-size: 1.5em;
        font-weight: 600;
        letter-spacing: 0.2px;
    }
`