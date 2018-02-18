import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotesBody.css';

class NotesBody extends Component {
  render() {
    return (
      <textarea
        className="NotesBody"
        onClick={this.props.callBackfromNotes}
        rows="5"
        value={this.props.children}
      />
    );
  }
}

NotesBody.PropTypes={
  callBackfromNotes:PropTypes.func
}
NotesBody.defaultProps={
  callBackfromNotes:()=>null,
}
export default NotesBody;