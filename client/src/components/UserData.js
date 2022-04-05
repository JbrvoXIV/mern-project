import React, { useContext } from 'react';
import { api, ForceRerenderContext } from '../App.js';
import { DeleteIcon, UpdateIcon } from '../styles/Data.styled.js'

const UserData = (props) => {

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
                <DeleteIcon onClick={handleDelete} />
            </td>
        </tr>
    );
}

export default UserData;