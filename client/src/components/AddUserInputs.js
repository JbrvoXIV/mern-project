import React, { useState, useEffect, useRef, useContext } from 'react';

import { api, ForceRerenderContext } from '../App';

import { SubmitIcon, CancelIcon } from '../styles/Data.styled';
import { InputStyled } from '../styles/Global';

const user = {
    name: '',
    email: '',
    birthday: '', 
    favMovie: '',
    favFood: '',
    favColor: '',
    favHobby: '',
    relationship: ''
}

const AddUserInputs = ({ handleClick, id }) => {

    const [userData, setUserData] = useState(user);
    const relationshipRef = useRef();
    const forceRerender = useContext(ForceRerenderContext);

    const resetUserData = () => {
        setUserData({ ...user, relationship: relationshipRef.current.value });
    }

    useEffect(() => {
            setUserData(oldData => ({ ...oldData, relationship: relationshipRef.current.value }));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        
        const submitData = async () => {
            try {
                const request = await api.post('/users/api', {...userData});
                const response = request.data;
                if(response) {
                    console.log(response);
                }
                resetUserData();
                forceRerender();
                handleClick();
            } catch (error) {
                console.log(error.message);
            }
        }
        submitData();
    }

    const handleChange = e => {
        const idVal = e.target.id;
        setUserData(oldData => ({
            ...oldData,
            [idVal]: e.target.value
        }));
    }

    return (
        <>
            <td>
                <InputStyled type='text' id='name' name='name' value={userData.name} onChange={handleChange} required={true} autoComplete='off' />
            </td>
            <td>
                <InputStyled type='text' id='email' name='email' value={userData.email} onChange={handleChange} required={true} autoComplete='off' />
            </td>
            <td>
                <InputStyled type='date' id='birthday' name='birthday' value={userData.birthday} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='text' id='favMovie' name='favMovie' value={userData.favMovie} onChange={handleChange} required={true} autoComplete='off' />
            </td>
            <td>
                <InputStyled type='text' id='favFood' name='favFood' value={userData.favFood} onChange={handleChange} required={true} autoComplete='off' />
            </td>
            <td>
                <InputStyled type='text' id='favColor' name='favColor' value={userData.favColor} onChange={handleChange} required={true} autoComplete='off' />
            </td>
            <td>
                <InputStyled type='text' id='favHobby' name='favHobby' value={userData.favHobby} onChange={handleChange} required={true} autoComplete='off' />
            </td>
            <td>
                <InputStyled ref={relationshipRef} type='text' id='relationship' name='relationship' value={id} readOnly={true} />
            </td>
            <td>
                <SubmitIcon onClick={handleSubmit} />
                <CancelIcon onClick={handleClick} />
            </td>
        </>
    );
}

export default AddUserInputs;