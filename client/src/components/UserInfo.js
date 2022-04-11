import React, { useState, useContext } from 'react';
import { api, ForceRerenderContext } from '../App.js';
import { DeleteIcon, UpdateIcon, FadedRow, UpdateUserRow } from '../styles/Data.styled.js';
import UpdateUserForm from './UpdateUserForm.js';

const UserData = (props) => {

    const [updateUser, setUpdateUser] = useState(false);
    const forceRerender = useContext(ForceRerenderContext);

    const handleDelete = () => {
        const deleteUser = async () => {
            try {
                const request = await api.delete(`/users/api/${props._id}`);
                const response = request.data;
                if(response) {
                    console.log(response);
                }
                forceRerender();
            } catch (error) {
                console.log(error.message);
            }
        }
        deleteUser();
    }

    const userUpdating = () => {
        setUpdateUser(oldValue => !oldValue);
    }

    return (
        <>
            {!updateUser ?
                <FadedRow>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.birthday.split('T')[0]}</td>
                    <td>{props.favMovie}</td>
                    <td>{props.favFood}</td>
                    <td>{props.favColor}</td>
                    <td>{props.favHobby}</td>
                    <td>{props.relationship}</td>
                    <td>
                        <UpdateIcon onClick={userUpdating} />
                        <DeleteIcon onClick={handleDelete} />
                    </td>
                </FadedRow>
            :
                <UpdateUserRow>
                    <UpdateUserForm {...props} userUpdating={userUpdating}  />
                </UpdateUserRow>
            }
        </>
    );
}

export default UserData;