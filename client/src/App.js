import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Container } from './routes/styles/Global';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

const App = () => {

    return (
        <Container>
            <Link to='/test'>Testing</Link>
        </Container>
    );
}

export default App;