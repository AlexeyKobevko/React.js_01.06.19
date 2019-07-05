/*jshint esversion: 8 */

import './Profile.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ProfileImage } from '../ProfileImage';
import { ProfileUserSettings } from '../ProfileUserSettings';
import { ProfileStats } from '../ProfileStats';
import { ProfileBio } from '../ProfileBio';

export class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <ProfileImage profileImage="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" />
                <ProfileUserSettings />
                <ProfileStats posts={164} followers={188} following={206} />
                <ProfileBio firstName="Jane" lastName="Doe" bio="Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️" />
            </div>
        );
    }
}
