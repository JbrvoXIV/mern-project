import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

const App = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await api.get('/');
            const responseData = await response.data;
            setData({
                name: responseData.name,
                summary: responseData.summary,
                space: responseData.space
            });
        }

        getData();
    }, []); // testing get req from server

    return (
        <div>
            <Link to='/test'>Testing</Link>
            <ul>
                {Object.keys(data).map((key, index) => {
                    return <li key={index}>{data[key]}</li>
                })} {/* outputting get request data to server */}
            </ul>
        </div>
    );
}

export default App;