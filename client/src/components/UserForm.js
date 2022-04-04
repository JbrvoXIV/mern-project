import React, { useEffect, useRef, useState } from "react";
import { api } from "../App";
import { InputStyled } from "../styles/Global";

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

const UserForm = ({ handleClick }) => {

    const [userData, setUserData] = useState(user);
    const relationshipRef = useRef()

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
                    return () => handleClick(false);
                }
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
                <InputStyled type='text' id='name' name='name' value={userData.name} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='text' id='email' name='email' value={userData.email} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='date' id='birthday' name='birthday' value={userData.birthday} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='text' id='favMovie' name='favMovie' value={userData.favMovie} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='text' id='favFood' name='favFood' value={userData.favFood} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='text' id='favColor' name='favColor' value={userData.favColor} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled type='text' id='favHobby' name='favHobby' value={userData.favHobby} onChange={handleChange} required={true} />
            </td>
            <td>
                <InputStyled ref={relationshipRef} type='text' id='relationship' name='relationship' value='Friend' readOnly={true} />
            </td>
            <td>
                <InputStyled type='submit' value='SUBMIT' onClick={handleSubmit} />
            </td>
        </>
    );
}

export default UserForm;