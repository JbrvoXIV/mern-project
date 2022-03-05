import React, { useEffect, useState } from "react";
import { api } from "../App";
import { Container } from "./styles/Global";
import { ListStyled } from "./styles/List.styled";

const Test = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchTestData() {
            const response = await api.get('/users/api');
            const responseData = await response.data;
            setData([...responseData]);
        }

        fetchTestData();
    }, []);

    const dataList = data.map((user, index) => {
        return <li key={index}>User: {user.name} and Email: {user.email}</li>
    })

    return (
        <Container>
            <h1>In Testing component</h1>
            <ListStyled>
                {dataList}
            </ListStyled>
        </Container>
    );
}

export default Test;