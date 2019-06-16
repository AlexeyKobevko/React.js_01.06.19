/*jshint esversion: 8 */

import './Likes.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';

export class Likes extends Component {
    render() {
        const { likes } = this.props;
        return (
            <li className="gallery-item-likes">
                <span className="visually-hidden">
                    Likes:
                </span>
                <Icon  iconName="fas fa-heart" />
                {likes}
            </li>
        );
    }
}

Likes.propTypes = {
    likes: PropTypes.number
};