import React, { useState } from 'react';
import { api } from '../App';

import { Container, Flex, FormStyled, HeaderStyled, InputStyled, LabelStyled } from '../styles/Global';

const newUserState = {
    newFName: '',
    newLName: '',
    newEmail: '',
    newBirthday: '',
    newFavMovie: '',
    newFavFood: '',
    newFavColor: '',
    newFavHobby: '',
    newRelationship: ''
}

const Update = () => {
    
    const [userToUpdate, setUserToUpdate] = useState({ fname: '', lname: '' });
    const [newUserInfo, setNewUserInfo] = useState(newUserState);

    const handleChange = e => {
        const idVal = e.target.id;
        const name = e.target.name;

        if(!name) {
            if(idVal === 'fname' || idVal === 'lname') {
                return setUserToUpdate(oldData => ({ ...oldData, [idVal]: e.target.value }));
            }
            return setNewUserInfo(oldData => ({ ...oldData, [idVal]: e.target.value }));
        } else {
            return setNewUserInfo(oldData => ({ ...oldData, [name]: e.target.value }));
        }
    }

    const submitData = e => {
        e.preventDefault();
        const patchData = { 
            name: `${newUserInfo.newFName} ${newUserInfo.newLName}`.trim(), // trims whitespace to length 0 if newFName and newLName are not words
            email: newUserInfo.newEmail,
            birthday: newUserInfo.newBirthday ? new Date(newUserInfo.newBirthday) : '',
            favMovie: newUserInfo.newFavMovie,
            favFood: newUserInfo.newFavFood,
            favColor: newUserInfo.newFavColor,
            favHobby: newUserInfo.newFavHobby,
            relationship: newUserInfo.newRelationship
        };

        for(const key in patchData) { // delete empty object values
            if(patchData[key] === '') {
                delete patchData[key];
            }
        }

        const sendData = async () => {
            try {
                const request = await api.patch(`/users/api?fname=${userToUpdate.fname}&lname=${userToUpdate.lname}`, {
                    ...patchData
                });
                const response = request.data;
                if(response) {
                    console.log('Succesfully updated user!');
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        sendData();
    }

    return (
        <Container>
            <HeaderStyled>
                <h1>UPDATE PERSON</h1>
            </HeaderStyled>
            <Flex>
                <FormStyled onSubmit={submitData} autoCapitalize='words' autoComplete='off' autoSave='off'>

                    <fieldset name="user_to_be_updated">
                        <legend>USER TO BE UPDATED</legend>
                        <LabelStyled htmlFor='fname'>FIRST NAME</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='fname' required={true} value={userToUpdate.fname} />

                        <LabelStyled htmlFor='fname'>LAST NAME</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='lname' required={true} value={userToUpdate.lname} />
                    </fieldset>

                    <fieldset name="new_info">
                        <legend>ENTER INFO TO BE UPDATED</legend>
                        <LabelStyled htmlFor='newFName'>FIRST NAME</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='newFName' required={false} value={newUserInfo.newFName} />

                        <LabelStyled htmlFor='newLName'>LAST NAME</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='newLName' required={false} value={newUserInfo.newLName} />

                        <LabelStyled htmlFor='newEmail'>EMAIL</LabelStyled>
                        <InputStyled onChange={handleChange} type='email' id='newEmail' required={false} value={newUserInfo.newEmail} />

                        <LabelStyled htmlFor='newBirthday'>BIRTHDAY</LabelStyled>
                        <InputStyled onChange={handleChange} type='date' id='newBirthday' required={false} value={newUserInfo.newBirthday} />

                        <LabelStyled htmlFor='newFavMovie'>FAVORITE MOVIE</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='newFavMovie' required={false} value={newUserInfo.newFavMovie} />

                        <LabelStyled htmlFor='newFavFood'>FAVORITE FOOD</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='newFavFood' required={false} value={newUserInfo.newFavFood} />

                        <LabelStyled htmlFor='newFavColor'>FAVORITE COLOR</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='newFavColor' required={false} value={newUserInfo.newFavColor} />

                        <LabelStyled htmlFor='newFavHobby'>FAVORITE HOBBY</LabelStyled>
                        <InputStyled onChange={handleChange} type='text' id='newFavHobby' required={false} value={newUserInfo.newFavHobby} />

                        <LabelStyled htmlFor='friend'>
                            <InputStyled 
                            onChange={handleChange} 
                            type='radio' 
                            id='Friend'
                            name='newRelationship' 
                            required={false}
                            checked={newUserInfo.newRelationship === 'Friend'}
                            value='Friend' />
                            FRIEND
                        </LabelStyled>

                        <LabelStyled htmlFor='family'>
                            <InputStyled 
                            onChange={handleChange} 
                            type='radio' 
                            id='Family'
                            name='newRelationship' 
                            required={false}
                            checked={newUserInfo.newRelationship === 'Family'}
                            value='Family' />
                            FAMILY
                        </LabelStyled>

                        <InputStyled type='submit' value='SUBMIT' />
                    </fieldset>

                </FormStyled>

            </Flex>
        </Container>
    );
}

export default Update;