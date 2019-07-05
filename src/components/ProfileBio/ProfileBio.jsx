/*jshint esversion: 8 */

import './ProfileBio.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileBio extends Component {
    render() {
        const { firstName, lastName, bio } = this.props;
        return (
            <div className="profile-bio">
                <p>
                    <span className="profile-real-name">{firstName} {lastName}</span> {bio}
                </p>
            </div>
        );
    }
}

ProfileBio.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
};