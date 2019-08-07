/*jshint esversion: 8*/

import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Gallery } from 'components/Gallery';
import { Loading } from 'components/Loading';
import { Modal } from 'components/Modal';
import { PostContainer } from "containers/PostContainer";
import { load } from 'actions/pictures';

class GalleryUnmounted extends Component {

componentDidMount() {
    const { loadImages } = this.props;
    loadImages();
}

handleScroll = () => {
    const { loadImages, loading } = this.props;

    if (!loading) {
        loadImages();
    }
    
}

    render() {
        const { pictures, loading, isModalVisible } = this.props;
        return (
            <Fragment>
                {/* {isModalVisible && <Modal onClose={this.handleModalClose} visible >
                    <img src={this.state.pictures[0].image} alt=""/>
                </Modal>} */}
                {pictures.length > 0 && <Gallery handler={this.handleModalOpen} onScroll={this.handleScroll} pictures={pictures} />}
                <Route path="/posts/:id" component={PostContainer} />
                {loading && <Loading />}
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        pictures: state.pictures.entries,
        loading: state.pictures.loading,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        loadImages: () => dispatch(load()),
    }
}

export const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(GalleryUnmounted);