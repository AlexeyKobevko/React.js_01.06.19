import React, { Component, Fragment } from 'react';

import { Gallery } from 'components/Gallery';
import { Loading } from 'components/Loading';
import { Modal } from 'components/Modal';

export class GalleryContainer extends Component {
    state = { pictures: [], loading: false, page: 1, total: null, isModalVisible: false }

    handleTogleClick = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        const { token } = this.props;
        const { page } = this.state;
        this.setState({ loading: true });

        fetch(`http://localhost:8888/api/photos?page=${page}`, {
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${token}`,
            },
        })
            .then(respons => respons.json())
            .then(data => {
                this.setState(prevState => ({
                    loading: false,
                    page: prevState.page +1,
                    total: data.total,
                    pictures: prevState.pictures.concat(
                        data.photos.map(photo => ({ id: photo._id, image: photo.image, likes: photo.likes.length, comments: photo.comments.length }))
                      ),
                }));
            })
            .catch(() => {
                this.setState({ loading: false });
            });
    }

    renderItem = (picture) => {
        return (
          <div><img src={picture.image} /></div>
        )
    }

    shouldWeLoad = () => {
        const { state, pictures, loading, total} = this.state;

        return (total != null || total > pictures.length) && !loading;
    }

    handleScroll = () => {

        if (this.shouldWeLoad()) {
            this.loadItems();
        }
    }

    handleModalClose = () => {
        this.setState({
            isModalVisible: false,
        });
    }

    handleModalOpen = () => {
        this.setState({
            isModalVisible: true,
        });
        console.log('It work!');

    }

    getImage = () => {

    }

    render() {
        const { pictures, loading, isModalVisible } = this.state;
        return (
            <Fragment>
                {isModalVisible && <Modal onClose={this.handleModalClose} title="" visible />}
                {pictures.length > 0 && <Gallery handler={this.handleModalOpen} onScroll={this.handleScroll} pictures={pictures} />}
                {loading && <Loading />}
            </Fragment>
        );
    }
}