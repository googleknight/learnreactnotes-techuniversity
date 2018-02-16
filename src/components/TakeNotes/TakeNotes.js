import React, { Component } from 'react';
import './TakeNotes.css';
import NoteForm from '../NoteForm/NoteForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class TakeNotes extends Component {
  getNotes=(allNotes)=>{
    this.props.callBackfromApp(allNotes);
  }
  handleOnClick=(event)=>{
    this.props.updatePage('ViewNotes');
  }
  render() {
    return (
      <div className="container">
        <Header>Start taking notes</Header>
        <NoteForm callBackfromNotes={this.props.callBackfromApp}/>
        <Footer onClick={this.handleOnClick}>ViewNotes</Footer>
      </div>
    );
  }
}

export default TakeNotes;
