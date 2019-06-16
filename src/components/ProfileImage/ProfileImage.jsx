/*jshint esversion: 8 */

import './ProfileImage.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileImage extends Component {
    render() {
        const { profileImage } = this.props;
        return (
            <div className="profile-image">
                <img src={profileImage} alt="" />
            </div>
        );
    }
}

ProfileImage.propTypes = {
    profileImage: PropTypes.string
};