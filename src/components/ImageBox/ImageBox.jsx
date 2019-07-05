/*jshint esversion: 8 */

import './ImageBox.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Likes } from '../Likes';
import { Comments } from '../Comments';

export class ImageBox extends Component {
    render() {
        const { image, likes, comments, id, handler } = this.props;
        return (
            <Link to={`/posts/${id}`}>
                <div className="gallery-item" onClick={handler} tabIndex="0">
                    <img src={image} className="gallery-image" data-id={id} alt="" />
                    <div className="gallery-item-info">
                        <ul>
                            <Likes likes={likes} />
                            <Comments comments={comments} />
                        </ul>
                    </div>
                </div>
            </Link>
        );
    }
}