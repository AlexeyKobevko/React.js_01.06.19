/*jshint esversion: 8 */

import './Comments.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon} from '../Icon';

export class Comments extends Component {
    render() {
        const { comments } = this.props;
        return (
            <li className="gallery-item-comments">
                <span className="visually-hidden">
                    Comments:
                </span>
                <Icon iconName="fas fa-comment" />
                {comments}
            </li>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.number
};