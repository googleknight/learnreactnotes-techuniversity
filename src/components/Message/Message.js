import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div>
        <label>{this.props.children}</label>
      </div>
    );
  }
}

export default Message;
