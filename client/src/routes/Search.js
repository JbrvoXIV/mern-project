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

                if(requestedData[0]) {
                    return setResponseData({
                        name: requestedData[0].name,
                        email: requestedData[0].email,
                        password: requestedData[0].password
                    });
                }

                return setResponseData(oldData => ({
                    ...oldData,
                    name: undefined
                }));
            } catch (error) {
                console.log(error.message);
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
                <DataView data={responseData} submitted={formSubmitted}/>
            </Flex>
        </Container>
    );
}

export default Search;