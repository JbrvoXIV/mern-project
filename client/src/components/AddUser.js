import React, { useState } from 'react';

import { AddUserRow } from '../styles/Data.styled';
import UserForm from './UserForm';

const AddUser = () => {

    const [createUser, setCreateUser] = useState(false);

    const handleClick = val => {
        setCreateUser(val);
    }

    console.log(createUser);

    return (
        <AddUserRow>
            { createUser && <UserForm handleClick={handleClick} /> }
            { !createUser && <td colSpan={8}>
                <button onClick={() => handleClick(true)}>ADD USER</button>
            </td> }
        </AddUserRow>
    );
}

export default AddUser;