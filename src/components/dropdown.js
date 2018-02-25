import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
    static propTypes = {
        // items: PropTypes.array.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                text: PropTypes.string
            })
        ).isRequired
    };
    render() {
        return (
            <select name="dropdown">
                {this.props.items.map((item, index) =>
                    <option value={item.value} key={index}>{item.text}</option>
                    /*<option value="{item.value}">{item.text}</option>*/
                )}
            </select>
        )
    }
}