import React, { useContext } from 'react';
import UserData from './UserData.js';
import { DataContext } from '../App.js';
import { DataStyled } from '../styles/Data.styled.js';

const DataTable = () => {

    const data = useContext(DataContext);

    const userFriends = data.filter(user => {
        return user.relationship === 'Friend'
    }).map(user => { return ( <UserData key={user._id} {...user} /> ) })

    const userFamily = data.filter(user => {
        return user.relationship === 'Family'
    }).map(user => { return ( <UserData key={user._id} {...user} /> ) })
    
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
                    {userFriends}
                </tbody>
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
                    {userFamily}
                </tbody>
            </table>
        </DataStyled>
    );
}

export default DataTable;