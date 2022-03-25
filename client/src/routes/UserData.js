import React from 'react';
import { DeleteIcon, UpdateIcon } from '../styles/Data.styled.js'

const UserData = (props) => {

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.birthday.split('T')[0]}</td>
            <td>{props.favMovie}</td>
            <td>{props.favFood}</td>
            <td>{props.favColor}</td>
            <td>{props.favHobby}</td>
            <td>{props.relationship}</td>
            <td>
                <UpdateIcon />
                <DeleteIcon />
            </td>
        </tr>
    );
}

export default UserData;