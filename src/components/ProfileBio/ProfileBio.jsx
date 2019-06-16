/*jshint esversion: 8 */

import './ProfileBio.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProfileBio extends Component {
    render() {
        const { firstName, lastName, losung } = this.props;
        return (
            <div className="profile-bio">
                <p>
                    <span className="profile-real-name">{firstName} {lastName}</span> {losung}
                </p>
            </div>
        );
    }
}

ProfileBio.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    losung: PropTypes.string,
};