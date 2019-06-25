/*jshint esversion: 8 */

import './Button.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
    render() {
        const { buttonName, buttonContent, handler } = this.props;
        return (
            <button className={buttonName} onClick={handler} >{buttonContent}</button>
        );
    }
}

Button.propTypes = {
    buttonName: PropTypes.string,
    buttonContent: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
}