import styled from "styled-components";

export const DataStyled = styled.section`
    
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 50px;
    
    table {
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
            background-color: #5188ff;
            color: whitesmoke;
            font-size: 0.8em;
        }

        td {
            background-color: whitesmoke;
        }

    }

    p {
        font-size: 1.5em;
        font-weight: 600;
        letter-spacing: 0.2px;
    }
`