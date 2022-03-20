import React, { useState } from 'react';
import { api } from '../App';
import DataView from './DataView';

import { Container, Flex, FormStyled, HeaderStyled, InputStyled, LabelStyled } from "../styles/Global";

const Search = () => {

    const [data, setData] = useState({
        fname: '',
        lname: ''
    });

    const [responseData, setResponseData] = useState({
        name: '',
        email: '',
        birthday: '',
        favMovie: '',
        favFood: '',
        favColor: '',
        favHobby: '',
        relationship: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitData = e => {        
        e.preventDefault();
        
        async function getData() {
            try {
                const response = await api.get('/users/api', {
                    params: {
                        fname: data.fname.toLowerCase(),
                        lname: data.lname.toLowerCase()
                    }
                });
                setFormSubmitted(true);
                const requestedData = await response.data;
                if(requestedData) {
                    return setResponseData({
                        name: requestedData.name,
                        email: requestedData.email,
                        birthday: requestedData.birthday,
                        favMovie: requestedData.favMovie,
                        favFood: requestedData.favFood,
                        favColor: requestedData.favColor,
                        favHobby: requestedData.favHobby,
                        relationship: requestedData.relationship
                    });
                }
            } catch (error) {
                console.log(error.message);
                setFormSubmitted(true);
                return setResponseData({ name: null });
            }
        }
        getData();
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
                <h1>SEARCH DATABASE</h1>
            </HeaderStyled>
            <Flex>
                <FormStyled onSubmit={submitData} autoComplete='off' >
                    <LabelStyled htmlFor='fname'>FIRST NAME</LabelStyled>
                    <InputStyled
                        onChange={handleChange}
                        type='text'
                        id='fname'
                        required={true}
                        value={data.fname}
                    />
                    <LabelStyled htmlFor='lname'>LAST NAME</LabelStyled>
                    <InputStyled
                        onChange={handleChange}
                        type='text'
                        id='lname'
                        required={true}
                        value={data.lname}
                    />
                    <InputStyled 
                        type='submit'
                        value='SUBMIT'
                    />
                </FormStyled>
                {formSubmitted && <DataView {...responseData} />}
            </Flex>
        </Container>
    );
}

export default Search;