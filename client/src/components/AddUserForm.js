import React, { useState } from "react";
import { withTheme } from "styled-components";

import AddUserInputs from "./AddUserInputs";

import { AddUserRow } from "../styles/Data.styled";
import { InputStyled } from "../styles/Global";

const AddUser = ({ id }) => {

    const [createUser, setCreateUser] = useState(false);    

    const handleClick = () => {
        setCreateUser(oldState => !oldState);
    }

    return (
        <>
            <AddUserRow>
                { !createUser && 
                    <td colSpan={8}>
                        <InputStyled type='submit' value='ADD USER' onClick={handleClick} />
                    </td> 
                }
                { createUser &&
                    <AddUserInputs handleClick={handleClick} id={id} />
                }
            </AddUserRow>
        </>
    );
}

export default withTheme(AddUser);