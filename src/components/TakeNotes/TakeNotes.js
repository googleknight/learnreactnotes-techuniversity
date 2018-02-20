import React, { Component } from 'react';
import './TakeNotes.css';
import  NoteForm  from '../NoteForm/NoteForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class TakeNotes extends Component {
  render() {
    return (
      <div className="container">
        <Header>Start taking notes</Header>
        <NoteForm />
        <Footer>About Us</Footer>
      </div>
    );
  }
}


export default TakeNotes;
