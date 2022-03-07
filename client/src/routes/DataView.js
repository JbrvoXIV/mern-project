import React from 'react';

const DataView = (props) => {

    const name = props.data.name;
    const email = props.data.email;
    const password = props.data.password;
    const submitted = props.submitted;

    const style = {
        border: name ? '2px solid black' : 'none',
        opacity: 0
    }

    const displayData = () => {
        if(name) {
            style.opacity = 1;
            return (
                <ul>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Password: {password}</li>
                </ul>                
            )
        } else {
            style.opacity = 1;
            return (
                <p>USER NOT FOUND</p>
            )
        }
    }

    return (
        <section style={style}>
            {submitted && displayData()}
        </section>
    );
}

export default DataView;