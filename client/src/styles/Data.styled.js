import styled from "styled-components";
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';
import { Update } from '@styled-icons/material-rounded/Update';

export const DataStyled = styled.section`
    
    width: 100%;
    margin-top: 50px;
    
    table {
        width: calc(100% + 50px);
        border-collapse: collapse;
        color: black;
        
        th, td {
            border-bottom: 1px solid black;
            padding: 10px;
            width: 150px;
            text-align: center;
            cursor: default;
        }
        
        th {
            background-color: #5188ff;
            color: whitesmoke;
            font-size: 0.8em;
        }

        td {
            background-color: whitesmoke;
            font-size: 0.90em;
        }

        td:last-child {
            background-color: rgba(0, 0, 0, 0);
            padding: 0;
            transform: translateX(-50px);
            border: none;
            height: min-content;
            width: 50px;
            opacity: 0;
            transition: opacity 400ms ease, transform 300ms ease;
        }

        tr {
            &:hover {
                td:last-child {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        }
    }
`

export const DeleteIcon = styled(TrashFill)`
    display: inline-block;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
`

export const UpdateIcon = styled(Update)`
    display: inline-block;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
`