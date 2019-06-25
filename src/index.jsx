/*jshint esversion: 8 */

import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Gallery } from './components/Gallery';
import { Profile } from './components/Profile';
import { Auth } from './components/Auth';
import { Counter } from './components/Counter';
import { Timer } from './components/Timer';

class App extends Component {
    state = { token: null };

    handleTogleClick = () => {
        this.setState(prevState => ({ visible: !prevState.visible }));
    }

    handleSuccess = (token) => {
        this.setState({token});
    }

    render() {
        const { token } = this.state;
        return (
            <main>
                {!token && <Auth onSuccess={this.handleSuccess} />}
                {token && <div className="container">
                    <Profile />
                    <Gallery token={token} />
                </div>}
            </main>
        );
    }
}

ReactDom.render(<App />, document.getElementById('root'));