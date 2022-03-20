import React, { useState } from 'react';
import { api } from '../App';

import { Container, FormStyled, HeaderStyled, InputStyled } from '../styles/Global';

const Create = () => {

    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        birthday: '',
        favMovie: '',
        favFood: '',
        favColor: '',
        favHobby: ''
    });

    const submitData = e => {
        e.preventDefault();

        const sendData = async () => {
            try {
                await api.post('/users/api', {...data});
                console.log('Data submmitted succesfully!');
            } catch (error) {
                console.log(error.message);
            }
        }
        sendData();
    }

    const handleChange = e => {
        const idVal = e.target.id;
        setData(oldData => ({
            ...oldData,
            [idVal]: e.target.value
        }));
    }

    return (
        <Container>
            <HeaderStyled>
                <h1>CREATE PERSON</h1>
            </HeaderStyled>
            <FormStyled onSubmit={submitData} autoComplete='off' >
                <label htmlFor='fname' >FIRST NAME</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='fname'
                    required={true}
                    value={data.fname}
                />
                <label htmlFor='lname' >LAST NAME</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='lname'
                    required={true}
                    value={data.lname}
                />
                <label htmlFor='email' >EMAIL</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='email'
                    required={true}
                    value={data.email}
                />
                <label htmlFor='birthday' >BIRTHDAY (wip)</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='birthday'
                    required={true}
                    value={data.birthday}
                />
                <label htmlFor='favMovie' >FAVORITE MOVIE</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='favMovie'
                    required={true}
                    value={data.favMovie}
                />
                <label htmlFor='favFood' >FAVORITE FOOD</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='favFood'
                    required={true}
                    value={data.favFood}
                />
                <label htmlFor='favColor' >FAVORITE COLOR</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='favColor'
                    required={true}
                    value={data.favColor}
                />
                <label htmlFor='favHobby' >FAVORITE HOBBY</label>
                <InputStyled
                    onChange={handleChange}
                    type='text'
                    id='favHobby'
                    required={true}
                    value={data.favHobby}
                />
                <InputStyled type='submit' value='SUBMIT' />
            </FormStyled>
        </Container>
    )
}

export default Create;