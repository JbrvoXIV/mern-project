import React from 'react';
import { DataStyled } from '../styles/Data.styled.js';

const DataView = (props) => {

    const displayData = () => {
        if(props.name) {
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
                            <th>RELATIONSHIP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.name}</td>
                            <td>{props.email}</td>
                            <td>{props.birthday.split('T')[0]}</td>
                            <td>{props.favMovie}</td>
                            <td>{props.favFood}</td>
                            <td>{props.favColor}</td>
                            <td>{props.favHobby}</td>
                            <td>{props.relationship}</td>
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