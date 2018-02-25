import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const FormFunctional = () => {
    let fields = {
        name: '',
        email: '',
        age: '',
        phone: '',
        result: '',
    };

    const submit = (event) => {
        event.preventDefault();
        fields.result = `Name: ${fields.name}, email: ${fields.email}, age: ${fields.age}, phone: ${fields.phone}`;
    };

    const updateField = (event) => {
        let field = event.target.getAttribute('data-name');
        fields[field] += event.target.value;
    };

    return (
        <div>
            <Link to='/'>App</Link>
            <form onSubmit={submit}>
                <input
                    data-name="name"
                    type="text"
                    placeholder="Name"
                    value={fields.name}
                    onChange={updateField}
                />
                <input
                    data-name="email"
                    type="text"
                    placeholder="Email"
                    value={fields.email}
                    onChange={updateField}
                />
                <input
                    data-name="age"
                    type="text"
                    placeholder="Age"
                    value={fields.age}
                    onChange={updateField}
                />
                <input
                    data-name="phone"
                    type="text"
                    placeholder="Phone number"
                    value={fields.phone}
                    onChange={updateField}
                />
                <input type="submit" value='OK'/>
            </form>
            {fields.result}
        </div>
    )
};

export default FormFunctional;