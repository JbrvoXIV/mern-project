import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

const App = () => {
    return (
        <div>
            <Link to='/test'>Testing</Link>  
        </div>
    );
}

export default App;