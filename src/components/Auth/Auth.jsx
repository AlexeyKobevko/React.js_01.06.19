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
    fetch('http://localhost:8888/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    })
      .then(response => response.json)
      .then(data => console.log(data));
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
                <form className="login-form">
                  <input onChange={this.handleTextChange} name="username" type="text" placeholder="username" value={username} />
                  <input onChange={this.handleTextChange} name="password" type="password" placeholder="password" value={password} />
                  <Button buttonName="btn login-btn" buttonContent="sign in" onclick={this.handleSignIn} />
                </form>
              </div>
            </div>
        );
    }
}