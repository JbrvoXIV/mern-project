import React from 'react';
import { DataStyled } from '../styles/Data.styled.js';

const DataView = ({ name, email, favMovie, favFood, favColor, favHobby }) => {

    const displayData = () => {
        if(name) {
            return (
                <ul>
                    <li>NAME: {name}</li>
                    <li>EMAIL: {email}</li>
                    <li>FAVORITE MOVIE: {favMovie}</li>
                    <li>FAVORITE FOOD: {favFood}</li>
                    <li>FAVORITE COLOR: {favColor}</li>
                    <li>FAVORITE HOBBY: {favHobby}</li>
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