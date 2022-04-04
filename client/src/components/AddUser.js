import React, { useState } from 'react';

import { AddUserRow } from '../styles/Data.styled';
import UserForm from './UserForm';

const AddUser = () => {

    const [createUser, setCreateUser] = useState(false);

    return (
        <AddUserRow>
            { createUser && <UserForm /> }
            { !createUser && <td colSpan={8}>
                <button onClick={() => setCreateUser(true)}>ADD USER</button>
            </td> }
        </AddUserRow>
    );
}

export default AddUser;