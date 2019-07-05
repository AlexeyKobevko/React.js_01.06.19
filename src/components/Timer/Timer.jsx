/*jshint esversion: 8 */

import React, { Component } from 'react';

export class Timer extends Component {
  constructor(props){
    super(props);

    this.timer = null;
    this.state = { times: 0 }
  }

  incrementTimes = () => {
    this.setState((prevState) => ({ times: prevState.times + 1 }));
  }

  componentDidMount(){
    this.timer = setInterval(this.incrementTimes, 1000);
  }

    render() {
      const { times } = this.state;
        return (
            <div>{times}</div>
        );
    }
}