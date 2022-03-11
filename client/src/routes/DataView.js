import React from 'react';

const DataView = (props) => {
    
    const name = props.data.name;
    const email = props.data.email;
    const password = props.data.password;

    const displayData = () => {
        if(name) {
            return (
                <ul>
                    <li>NAME: {name}</li>
                    <li>EMAIL: {email}</li>
                    <li>PASSWORD: {password}</li>
                </ul>
            )
        } else {
            return (
                <p>User Not Found</p>
            )
        }
    }

    return (
        <section>
            {displayData()}
        </section>
    );
}

export default DataView;