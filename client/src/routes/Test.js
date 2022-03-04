import React, { useEffect, useState } from "react";
import { api } from "../App";

const Test = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchTestData() {
            const response = await api.get('/test/api');
            const responseData = await response.data;
            setData({...responseData});
        }

        fetchTestData();
    }, []);

    return (
        <div>
            <h1>In Testing component</h1>
            <p>{data.message}</p>
        </div>
    );
}

export default Test;