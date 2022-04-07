import React, { useState, useEffect, createContext } from 'react';
import axios from "axios";

import { ThemeProvider } from 'styled-components';
import { Container, Flex, HeaderStyled, theme } from './styles/Global';

import DataTable from './components/DataTable.js';


export const api = axios.create({
    baseURL: 'http://localhost:5000'
});

export const DataContext = createContext();
export const ForceRerenderContext = createContext();

const App = () => {

    const [data, setData] = useState([]);
    const [rerender, setRerender] = useState(0);

    const forceRerender = () => {
        setRerender(oldValue => oldValue + 1);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const request = await api.get('/users/api');
                setData(request.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getData();
    }, [rerender]);

    return (
        <DataContext.Provider value={data}>
            <ForceRerenderContext.Provider value={forceRerender}>
                <ThemeProvider theme={ theme } >
                    <Container>
                        <Flex>
                            <HeaderStyled>
                                <h1>database.</h1>
                            </HeaderStyled>
                            <DataTable />
                        </Flex>
                    </Container>
                </ThemeProvider>
            </ForceRerenderContext.Provider>
        </DataContext.Provider>
    );
}

export default App;