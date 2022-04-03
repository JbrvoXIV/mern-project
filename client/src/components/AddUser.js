import React, { useState } from 'react';

import { AddUserRow } from '../styles/Data.styled';

const AddUser = () => {

    const [createUser, setCreateUser] = useState(false);

    return (
        <AddUserRow>
            <td colSpan={8}>
                <button onClick={() => setCreateUser(true)}>ADD USER</button>
            </td>
        </AddUserRow>
    );
}

export default AddUser;