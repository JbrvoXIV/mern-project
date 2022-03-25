import styled from "styled-components";

export const DataStyled = styled.section`
    
    width: 100%;
    margin-top: 50px;
    
    table {
        width: 100%;
        border-collapse: collapse;
        color: black;
        
        th, td {
            border-bottom: 1px solid black;
            padding: 10px;
            width: 150px;
            text-align: center;
        }

        th {
            background-color: #5188ff;
            color: whitesmoke;
            font-size: 0.8em;
        }

        /* th:last-child {
            border: none;
            width: 0;
            opacity: 0;
        } */

        td {
            background-color: whitesmoke;
        }

        td:last-child {
            background-color: black;
            padding: 0;
            border: none;
            width: 0;
            
        }

        tr {
            &:hover {
                td:last-child {
                    width: 20px;
                }
            }
        }
    }

    p {
        font-size: 1.5em;
        font-weight: 600;
        letter-spacing: 0.2px;
    }
`