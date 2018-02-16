import React, { Component } from 'react';
import './NotesBody.css';

class NotesBody extends Component {
  render() {
    return (
      <textarea
        className="NotesBody"
        readOnly
        rows="5"
        value={this.props.children}
      />
    );
  }
}

export default NotesBody;
