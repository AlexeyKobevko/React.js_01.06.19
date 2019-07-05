/*jshint esversion: 8 */

import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { GalleryContainer } from 'containers/GalleryContainer';
import { PostContainer } from "containers/PostContainer";
import { Profile } from 'components/Profile';
import { Auth } from 'components/Auth';
import { Modal } from 'components/Modal';

// Claudie_Friesen@yahoo.com

class App extends Component {
    state = { token: localStorage.getItem('token'), isModalVisible: false };

    handleTogleClick = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }

    handleSuccess = (token) => {
        this.setState({token}, () => {
            localStorage.setItem('token', token);
        });
    }

    handleSignOut = (event) => {
        this.setState({'token': ''}, () => {
            localStorage.setItem('token', null);
        });
        event.preventDefault();
    }

    handleModalClose = () => {
        this.setState({
            isModalVisible: false,
        });
    }

    render() {
        const { token, isModalVisible } = this.state;
        return (
            <main>
                <button className="btn profile-edit-btn" onClick={this.handleSignOut}>Sign out</button>
                <Switch>
                    <Route path="/" component={GalleryContainer} exact />
                    <Route path="/auth" render={() => <Auth onSuccess={this.handleSuccess} />} exact />
                    <Route path="/posts/:id" component={PostContainer} />
                </Switch>
                {/* {!token && <Auth onSuccess={this.handleSuccess} />}
                {token && <div className="container">
                            <Profile />
                            <GalleryContainer token={token} />
                        </div>
                } */}
                {isModalVisible && <Modal onClose={this.handleModalClose} title="Hi from modal" visible />}
            </main>
        );
    }
}

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));