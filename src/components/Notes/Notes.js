import React, { Component } from 'react';
import Title from '../Title/Title';
import NotesBody from '../NotesBody/NotesBody';
import './Notes.css';

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        <Title>{this.props.title}</Title>
        <NotesBody>{this.props.body}</NotesBody>
      </div>
    );
  }
}

export default Notes;
