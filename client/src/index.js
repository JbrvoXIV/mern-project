import App from './App';
import Test from './routes/Test';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='test' element={ <Test /> } />
        </Routes>
    </BrowserRouter>,
    root
);