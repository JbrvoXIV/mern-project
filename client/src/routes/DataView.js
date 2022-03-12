import React from 'react';
import { DataStyled } from '../styles/Data.styled.js';

const DataView = ({ name, email, favMovie, favFood, favColor, favHobby }) => {

    const displayData = () => {
        if(name) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Movie</th>
                            <th>Favorite Food</th>
                            <th>Favorite Color</th>
                            <th>Favorite Hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{favMovie}</td>
                            <td>{favFood}</td>
                            <td>{favColor}</td>
                            <td>{favHobby}</td>
                        </tr>
                    </tbody>
                </table>
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