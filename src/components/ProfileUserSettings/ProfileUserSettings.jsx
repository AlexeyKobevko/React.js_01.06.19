/*jshint esversion: 8 */

import './ProfileUserSettings.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon/';
import { Button } from '../Button/';

export class ProfileUserSettings extends Component {
    render() {
        return (
            <div className="profile-user-settings">
                <h1 className="profile-user-name">janedoe_</h1>
                <Button buttonName="btn profile-edit-btn" buttonContent="Edit Profile" />
                <Button buttonName="btn profile-settings-btn" buttonContent={<Icon iconName="fas fa-cog" />} />
            </div>
        );
    }
}