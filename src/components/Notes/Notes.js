import React, { Component } from 'react';
import Title from '../Title/Title';
import NotesBody from '../NotesBody/NotesBody';
import PropTypes from 'prop-types';
import './Notes.css';
import NoteForm from '../NoteForm/NoteForm';

class Notes extends Component {
  handleOnClick=(event)=>{
    this.props.callBackfromViewNotes(this.props.note.key);
  }
  render() {
    return (
      <div className="Notes">
        <Title>{this.props.note.notesTitle}</Title>
        <NotesBody callBackfromNotes={this.handleOnClick}>{this.props.note.notesBody}</NotesBody>
      </div>
    );
  }
}

NoteForm.propTypes={
  callBackfromNotes:PropTypes.func,
  note:PropTypes.object
}
NoteForm.defaultProps={
  callBackfromNotes:()=>null,
  note:[]
}
export default Notes;
