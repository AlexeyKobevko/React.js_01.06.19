import React, { Component } from 'react';

export class PostsContainer extends Component {
    state = { pictures: [], loading: false, page: 1, total: null, isModalVisible: false }

    render() {
        console.log(this.props);
        
        return (
            <Fragment>
                Hello from post page
            </Fragment>
        );
    }
}