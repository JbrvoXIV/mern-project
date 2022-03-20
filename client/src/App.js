import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

import { Container, Flex } from './styles/Global';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

const App = () => {

    return (
        <>
            <Container>
                <Flex >
                    <Link to='/search'>Search the database</Link>
                    <Link to='/create'>Create a user</Link>
                    <Link to='/update'>Update a current user</Link>
                    <Link to='/delete'>Delete a user</Link>
                </Flex>
            </Container>
        </>
    );
}

export default App;