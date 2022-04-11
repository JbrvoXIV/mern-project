import styled from "styled-components";
import { TrashFill } from '@styled-icons/bootstrap/TrashFill';
import { Update } from '@styled-icons/material-rounded/Update';
import { CheckmarkSquareOutline } from '@styled-icons/evaicons-outline/CheckmarkSquareOutline'
import { Cancel } from '@styled-icons/typicons/Cancel'

export const DataStyled = styled.section`
    
    width: 100%;
    margin-top: 50px;
    overflow-x: auto;
    
    table {
        margin: 0 auto;
        width: 90%;
        border-collapse: collapse;
        color: black;
        text-align: center;
        
        th, td {
            padding: 5px;
            border-bottom: 1px solid lightgray;
            cursor: default;
            vertical-align: middle;
            width: fit-content;
        }
        
        th {
            background-color: ${({ theme }) => theme.backgroundColors.main};
            color: whitesmoke;
            font-size: 0.8em;
        }
        
        td {
            background-color: whitesmoke;
            font-size: 0.9em;
        }
        
        tr {
            height: 40px;
        }
    }
`

export const AddUserRow = styled.tr`

    margin-bottom: 20px;

    td {
        border: none !important;
    }
`

export const UpdateUserRow = styled.tr`
    td:nth-child(9) {
        border-bottom: none;
    }
`

export const FadedRow = styled.tr`

    td:nth-child(9) {
        background-color: rgba(0, 0, 0, 0);
        padding: 0;
        transform: translateX(-50px);
        border: none;
        height: min-content;
        opacity: 0;
        transition: opacity 400ms ease, transform 300ms ease;
    }

    &:hover {
        td:nth-child(9) {
            opacity: 1;
            transform: translateX(-30px);
        }
    }
`

export const FadedHeader = styled.tr`

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

    &:hover {
        th:nth-child(9) {
            opacity: 1;
            transform: translateX(0);
        }
    }
`

export const DeleteIcon = styled(TrashFill)`
    display: inline-block;
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
    transition: transform 300ms; 

    &:hover {
        transform: scale(1.10);
    }
`

export const UpdateIcon = styled(Update)`
    display: inline-block;
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
    transition: transform 300ms; 

    &:hover {
        transform: scale(1.10);
    }
`

export const SubmitIcon = styled(CheckmarkSquareOutline)`
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
    transition: transform 300ms;
    float: left;

    &:hover {
        transform: scale(1.10);
    }
`

export const CancelIcon = styled(Cancel)`
    cursor: pointer;
    color: ${({ theme }) => theme.backgroundColors.secondary};
    width: 25px;
    height: 25px;
    transition: transform 300ms; 
    float: left;

    &:hover {
        transform: scale(1.10);
    }
`