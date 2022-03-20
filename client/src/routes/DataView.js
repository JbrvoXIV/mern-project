import React from 'react';
import { DataStyled } from '../styles/Data.styled.js';

const DataView = ({ name, email, birthday, favMovie, favFood, favColor, favHobby }) => {

    const displayData = () => {
        if(name) {
            return (
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>BIRTHDAY</th>
                            <th>FAVORITE MOVIE</th>
                            <th>FAVORITE FOOD</th>
                            <th>FAVORITE COLOR</th>
                            <th>FAVORITE HOBBY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{birthday.split('T')[0]}</td>
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
                <p>USER NOT FOUND</p>
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