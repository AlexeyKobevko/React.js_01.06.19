/*jshint esversion: 8 */

import './Icon.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Icon extends Component {
    render() {
        const { iconName } = this.props;
        return (
            <i className={iconName} aria-hidden="true"></i>
        );
    }
}

Icon.propTypes = {
    iconName: PropTypes.string
};
