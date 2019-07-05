/*jshint esversion: 8 */

import './Auth.scss';

import React, { Component } from 'react';

import { Button } from '../Button';

export class Auth extends Component {
  state = {
    username: '',
    password: '',
  }

  handleSignIn = () => {
    const { username, password } = this.state;
    const { onSuccess } = this.props;

    fetch('http://localhost:8888/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    })
      .then(response => response.json())
      .then((data) => {
        onSuccess(data.token);
      });
  }

  handleTextChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

    render() {
      const { username, password } = this.state;
        return (
            <div className="login-page">
              <div className="form">
                <div className="login-form">
                  <input onChange={this.handleTextChange} name="username" type="text" placeholder="username" value={username} />
                  <input onChange={this.handleTextChange} name="password" type="password" placeholder="password" value={password} />
                  <Button buttonName="btn login-btn" buttonContent="sign in" handler={this.handleSignIn} />
                  {/* <button className="btn login-btn" onClick={this.handleSignIn}>sign in</button> */}
                </div>
              </div>
            </div>
        );
    }
}