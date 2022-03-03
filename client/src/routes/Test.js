import React, { useEffect, useState } from "react";
import { api } from "../App";

const Test = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        // async function fetchTestData() {
        //     const response = await axios.get('http://localhost:5000/test/api');
        //     console.log(response);
        //     const responseData = await response.data;
        //     console.log(responseData);
        //     setData({...responseData});
        //     console.log(data);
        // }

        // fetchTestData();

        api.get('/test/api')
            .then(res => setData({...res.data}));
    }, []);

    return (
        <div>
            {data.message}
            In Testing component
        </div>
    );
}

export default Test;