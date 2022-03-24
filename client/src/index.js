import App from './App';
import Search from './routes/Search.js';
import Create from './routes/Create.js';
import Update from './routes/Update.js';
import Delete from './routes/Delete.js';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/Global';

const root = document.getElementById('root');
render(
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='/search' element={ <Search /> } />
            <Route path='/create' element={ <Create /> } />
            <Route path='/update' element={ <Update /> } />
            <Route path='/delete' element={ <Delete /> } />
        </Routes>
    </BrowserRouter>,
    root
);