import React, { useContext, useEffect, useRef, useState } from "react";
import { withTheme } from "styled-components";

import { api, ForceRerenderContext } from "../App";
import { AddUserRow } from "../styles/Data.styled";
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

const AddUser = ({ id }) => {

    const [createUser, setCreateUser] = useState(false);    
    const [userData, setUserData] = useState(user);
    const relationshipRef = useRef();
    const forceRerender = useContext(ForceRerenderContext);
    
    useEffect(() => {
        if(createUser)
            setUserData(oldData => ({ ...oldData, relationship: relationshipRef.current.value }));
    }, [createUser]);

    
    const handleSubmit = e => {
        e.preventDefault();
        
        const submitData = async () => {
            try {
                const request = await api.post('/users/api', {...userData});
                const response = request.data;
                if(response) {
                    console.log(response);
                }
                handleClick();
                forceRerender();
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

    const handleClick = () => {
        setCreateUser(oldState => !oldState);
    }

    return (
        <>
            <AddUserRow>
                { !createUser && 
                    <td colSpan={8}>
                        <InputStyled type='submit' value='ADD USER' onClick={handleClick} />
                    </td> 
                }
                { createUser &&
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
                    </>
                }
            </AddUserRow>
            { createUser && 
                <AddUserRow>
                    <td colSpan={8} style={{ paddingTop: 0 }}>
                        <InputStyled type='submit' value='SUBMIT' onClick={handleSubmit} />
                        <InputStyled type='submit' value='EXIT' onClick={handleClick} />
                    </td>
                </AddUserRow> 
            }
        </>
    );
}

// export default AddUser;
export default withTheme(AddUser);