import React, { Component } from 'react';
import './MessageItalics.css'
class Message extends Component {
  render() {
    return (
        <div>
            <label className='Italics'>{this.props.children}</label>
        </div>
    );
  }
}

export default Message;