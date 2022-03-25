import React, { useContext } from 'react';
import UserData from './UserData.js';
import { DataContext } from '../App.js';
import { DataStyled } from '../styles/Data.styled.js';

const DataTable = () => {

    const data = useContext(DataContext);

    const userRow = data.map(user => {
        return ( <UserData key={user._id} {...user} /> )
    });

    return (
        <DataStyled>
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
                    {userRow}
                </tbody>
            </table>
        </DataStyled>
    );
}

export default DataTable;