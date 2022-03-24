import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import Nav from './components/Nav.js';

import { Container, Flex, theme } from './styles/Global';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

const App = () => {

    return (
        <ThemeProvider theme={ theme } >
            <Container>
                <Nav />
                <Flex>
                    <Link to='/search'>Search the database</Link>
                    <Link to='/create'>Create a user</Link>
                    <Link to='/update'>Update a current user</Link>
                    <Link to='/delete'>Delete a user</Link>
                </Flex>
            </Container>
        </ThemeProvider>
    );
}

export default App;