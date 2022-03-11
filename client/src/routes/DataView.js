import React from 'react';
import { DataStyled } from '../styles/Data.styled.js';

const DataView = (props) => {
    
    const name = props.data.name;
    const email = props.data.email;
    const password = props.data.password;

    const displayData = () => {
        if(name) {
            return (
                <ul>
                    <li>NAME: {name}</li>
                    <li>EMAIL: {email}</li>
                    <li>PASSWORD: {password}</li>
                </ul>
            )
        } else {
            return (
                <p>User Not Found</p>
            )
        }
    }

    return (
        <DataStyled>
            {displayData()}
        </DataStyled>
    );
}

export default DataView;