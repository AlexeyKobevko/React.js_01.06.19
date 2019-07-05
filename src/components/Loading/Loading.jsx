import './Loading.scss';

import React from 'react';

export function Loading() {
    return (
        <div className="loading-wrapper">
            <div className="lds-roller">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}