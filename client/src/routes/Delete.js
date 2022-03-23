import React, { useState } from 'react';
import { api } from '../App';
import { Container, Flex, FormStyled, HeaderStyled, InputStyled, LabelStyled } from '../styles/Global';

const Delete = () => {

    const [data, setData] = useState({ fname: '', lname: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState({ message: '' });

    const submitData = e => {
        e.preventDefault();
        const sendData = async () => {
            try {
                const request = await api.delete('/users/api', { params: { ...data } });
                const responseMessage = await request.data;
                if(responseMessage) {
                    setFormSubmitted(true);
                    setResponseMessage(responseMessage);
                }
            } catch (error) {
                setFormSubmitted(true);
                setResponseMessage({ message: `Could Not Find Or Delete User: ${data.fname} ${data.lname}` });
            }
        }
        sendData();
    }

    const handleChange = e => {
        const idVal = e.target.id;
        setData(oldData => ({ ...oldData, [idVal]: e.target.value }));
    }

    return (
        <Container>
            <HeaderStyled>
                <h1>DELETE PERSON</h1>
            </HeaderStyled>
            <Flex>
                <FormStyled onSubmit={submitData} autoComplete='off' autoCorrect='off' autoSave='off' >
                    <fieldset>
                        <legend>ENTER USER INFO TO DELETE</legend>
                        <LabelStyled htmlFor='fname' >FIRST NAME</LabelStyled>
                        <InputStyled
                            onChange={handleChange}
                            type='text'
                            id='fname'
                            required={true}
                            value={data.fname}
                        />
                        <LabelStyled htmlFor='lname' >LAST NAME</LabelStyled>
                        <InputStyled
                            onChange={handleChange}
                            type='text'
                            id='lname'
                            required={true}
                            value={data.lname}                        
                        />
                        <InputStyled type='submit' value='SUBMIT' />
                    </fieldset>
                </FormStyled>
                { formSubmitted && responseMessage.message }
            </Flex>
        </Container>
    );
}

export default Delete;