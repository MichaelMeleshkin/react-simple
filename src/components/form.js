import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'aphrodite/no-important';
import styles from './../styles/main';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.input = {};
        this.state = {
            name: '',
            email: '',
            age: '',
            phone: '',
            result: ''
        };
        this.submit = this.submit.bind(this);
        this.updateInput = this.updateInput.bind(this);
        // this.updateField = this.updateField.bind(this);
    }

    submit(event) {
        event.preventDefault();
        this.setState({result: `Name: ${this.state.name}, email: ${this.state.email}, age: ${this.state.age}`});
    }

    updateField(field, event) {
        let obj = {};
        obj[field] = event.target.value;
        this.setState(obj);
    }

    updateInput() {
        for (let key in this.input) {
            let obj = {};
            obj[key] = this.input[key].value;
            this.setState(obj);
        }
    }

    render() {
        return (
            <div className={css(styles.gray)}>
                <Link to='/'>App</Link>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.updateField.bind(this, 'name')}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.updateField.bind(this, 'email')}
                    />
                    <input
                        type="text"
                        placeholder="Age"
                        value={this.state.age}
                        ref={(input) => { this.input.age = input; }}
                        onChange={this.updateInput}
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        value={this.state.phone}
                        ref={(input) => { this.input.phone = input; }}
                        onChange={this.updateInput}
                    />
                    <input type="submit" value='OK'/>
                </form>
                {this.state.result}
            </div>
        )
    }
}