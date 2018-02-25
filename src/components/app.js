import React, { Component } from 'react';
import Dropdown from './dropdown';
import { Link } from 'react-router-dom'
import { css } from 'aphrodite/no-important';
import styles from './../styles/main';

const data = [
    {
        value: 'v1',
        text: 'item1'
    },
    {
        value: 'v2',
        text: 'item2'
    },
    {
        value: 'v3',
        text: 'item3'
    },
    {
        value: 'v4',
        text: 'item4'
    },
    {
        value: 'v5',
        text: 'item5'
    },
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isDropdownShown: false};
    }

    toggleState() {
        this.setState({ isDropdownShown: !this.state.isDropdownShown })
    }

    render() {
        // React.createElement('div', {'className': 'square'}, 'Hello World!!!')
        let dropdown;
        if (this.state.isDropdownShown) dropdown = <Dropdown items={data}/>;
        return (
            <div className={css(styles.lightgray)}>
                <Link to="/form">Form</Link>
                <div className="square">Hello World!!!</div>
                <button onClick={this.toggleState.bind(this)}>
                    {this.state.isDropdownShown ? 'Hide' : 'Show'} dropdown
                </button>
                {dropdown}
            </div>
        )
    }
}