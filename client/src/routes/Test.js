import React, { useState } from 'react';
import { api } from '../App';
import { Container } from "./styles/Global";

const Test = () => {

    const [data, setData] = useState({
        fname: '',
        lname: ''
    });
    const [responseData, setResponseData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const submitData = e => {        
        e.preventDefault();
        async function getData() {
            const response = await api.get('/users/api', {
                params: {
                    fname: data.fname.toLowerCase(),
                    lname: data.lname.toLowerCase()
                }
            });
            const requestedData = await response.data[0];
            setResponseData({
                name: requestedData.name,
                email: requestedData.email,
                password: requestedData.password
            });
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
            <h1>In Testing component</h1>
            <form onSubmit={submitData} method='get' target='_blank'>
                <label htmlFor='fname'>First Name:</label>
                <input
                    onChange={handleChange}
                    type='text'
                    id='fname'
                    value={data.fname}
                /><br />
                <label htmlFor='lname'>Last Name:</label>
                <input
                    onChange={handleChange}
                    type='text'
                    id='lname'
                    value={data.lname}
                /><br />
                <input 
                    type='submit'
                    value='Submit'
                />
            </form>
            <div style={{margin: 0, border: '2px solid black'}}>
                {responseData.name}<br />
                {responseData.email}<br />
                {responseData.password}<br />
            </div>
        </Container>
    );
}

export default Test;