import React, { Component } from 'react';
import './ViewNotes.css';
import NoteForm from '../NoteForm/NoteForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
class ViewNotes extends Component {
  handleOnClick=(event)=>{
    this.props.updatePage('TakeNotes');
  }
  render() {
    let notesList=this.props.notes.map((note)=>{
      return(<Notes title={note.notesTitle} body={note.notesBody}/>);
    })
    return (
      <div className="ViewNotes">
        <Header>ViewNotes</Header>
        <div className='ViewNotesContainer'>{notesList}</div>
        <Footer onClick={this.handleOnClick}>Create new Note</Footer>
      </div>
    );
  }
}

export default ViewNotes;
