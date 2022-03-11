import React, { useState } from 'react';
import { api } from '../App';
import DataView from './DataView';

import { Container, Flex } from "../styles/Global";

const Search = () => {

    const [data, setData] = useState({
        fname: '',
        lname: ''
    });

    const [responseData, setResponseData] = useState({
        name: '',
        email: '',
        password: ''
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
                const requestedData = await response.data;
                setFormSubmitted(true);
                if(requestedData) {
                    return setResponseData({
                        name: requestedData.name,
                        email: requestedData.email,
                        password: requestedData.password
                    });
                }
            } catch (error) {
                console.log(error.message);
                setResponseData({ name: null });
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
            <Flex>
                <h1>In Testing component</h1>
                <form onSubmit={submitData} autoComplete='off'>
                    <label htmlFor='fname'>First Name:</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        id='fname'
                        required={true}
                        value={data.fname}
                    /><br />
                    <label htmlFor='lname'>Last Name:</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        id='lname'
                        required={true}
                        value={data.lname}
                    /><br />
                    <input 
                        type='submit'
                        value='Submit'
                    />
                </form>
                {formSubmitted && <DataView data={responseData} />}
            </Flex>
        </Container>
    );
}

export default Search;