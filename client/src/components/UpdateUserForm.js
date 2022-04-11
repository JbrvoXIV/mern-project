import React, { useContext, useState } from 'react';
import { api, ForceRerenderContext } from '../App';
import { CancelIcon, SubmitUpdateIcon } from '../styles/Data.styled';
import { InputStyled } from '../styles/Global';

const UpdateUserForm = (props) => {

    const [updatedUser, setUpdatedUser] = useState({ ...props, birthday: props.birthday.split('T')[0] });
    const forceRerender = useContext(ForceRerenderContext);

    
    const handleSubmit = () => {

        const submitPatchtData = async () => {
            try {
                const request = await api.patch(`/users/api/${updatedUser._id}`, {...updatedUser});
                const response = await request.data;
                if(response) {
                    console.log(response);
                }
                props.userUpdating();
                forceRerender();
            } catch (error) {
                console.log(error.message);
            }
        }
        submitPatchtData();
    }

    const handleChange = e => {
        const idVal = e.target.id;
        setUpdatedUser(oldData => ({
            ...oldData,
            [idVal]: e.target.value
        }));
    }

    return (
        <>
            <td>
                <InputStyled type='text' id='name' name='name' onChange={handleChange} value={updatedUser.name} />
            </td>
            <td>
                <InputStyled type='text' id='email' name='email' onChange={handleChange} value={updatedUser.email} />
            </td>
            <td>
                <InputStyled type='date' id='birthday' name='birthday' onChange={handleChange} value={updatedUser.birthday} />
            </td>
            <td>
                <InputStyled type='text' id='favMovie' name='favMovie' onChange={handleChange} value={updatedUser.favMovie} />
            </td>
            <td>
                <InputStyled type='text' id='favFood' name='favFood' onChange={handleChange} value={updatedUser.favFood} />
            </td>
            <td>
                <InputStyled type='text' id='favColor' name='favColor' onChange={handleChange} value={updatedUser.favColor} />
            </td>
            <td>
                <InputStyled type='text' id='favHobby' name='favHobby' onChange={handleChange} value={updatedUser.favHobby} />
            </td>
            <td>
                <select name='relationship' id='relationship'>
                    <option value='Friend'>FRIEND</option>
                    <option value='Family'>FAMILY</option>
                </select>
            </td>
            <td>
                <SubmitUpdateIcon onClick={handleSubmit} />
                <CancelIcon onClick={() => props.userUpdating()} />
            </td>
        </>
    );
}

export default UpdateUserForm;