/*jshint esversion: 8 */

import './Button.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
    render() {
        const { buttonName, buttonContent } = this.props;
        return (
            <button className={buttonName}>{buttonContent}</button>
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