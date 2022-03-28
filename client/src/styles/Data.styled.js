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
            cursor: default;
        }
        
        th {
            background-color: ${({ theme }) => theme.backgroundColors.main};
            color: whitesmoke;
            font-size: 0.8em;
        }

        th:nth-child(9) {
            padding: 0;
            transform: translateX(-50px);
            border: none;
            height: min-content;
            width: 50px;
            opacity: 0;
            transition: opacity 400ms ease, transform 300ms ease;            
        }

        td {
            background-color: whitesmoke;
            font-size: 0.90em;
        }

        td:nth-child(9) {
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
            text-align: center;
            &:hover {
                td:nth-child(9) {
                    opacity: 1;
                    transform: translateX(0);
                }
                th:nth-child(9) {
                    opacity: 1;
                    transform: translateX(0);                    
                }
            }
        }

        tbody > tr:last-child > td { // remove border from button cell
            border-bottom: none;
        }
    }
`

export const AddUserRow = styled.tr`

    button {
        font-size: 0.85em;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        min-width: 150px;
        height: 2.2em;
        background-color: whitesmoke;
        color: ${({ theme }) => theme.backgroundColors.secondary};
        border: 2px solid ${({ theme }) => theme.backgroundColors.secondary};
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            filter: brightness(90%);
        }

        &:active {
            background-color: ${({ theme }) => theme.backgroundColors.secondary};
            color: whitesmoke;
        }
    }
`

export const DeleteIcon = styled(TrashFill)`
    display: inline-block;
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
`

export const UpdateIcon = styled(Update)`
    display: inline-block;
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
`