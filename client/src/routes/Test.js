import React, { useEffect, useState } from "react";
import axios from 'axios';

const Test = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/test')
            .then(res => {
                setData(res)
            })
    }, []);

    return (
        <div>
            {data}
        </div>
    );
}

export default Test;