import React, { Component, Fragment } from 'react';

export class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = { pictures: [], loading: false, page: 1, total: null, isModalVisible: false };
    }

    render() {
        console.log(this.props);
        
        return (
            <Fragment>
                Hello from post page
            </Fragment>
        );
    }
}