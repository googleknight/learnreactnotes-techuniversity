import React, { Component } from 'react';
import './TakeNotes.css';
import NoteForm from '../NoteForm/NoteForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

class TakeNotes extends Component {
  handleOnClick=(event)=>{
    this.props.updatePage('ViewNotes');
  }
  render() {
    return (
      <div className="container">
        <Header>Start taking notes</Header>
        <NoteForm callBackfromNotes={this.props.callBackfromApp} note={this.props.note}/>
        <Footer onClick={this.handleOnClick}>ViewNotes</Footer>
      </div>
    );
  }
}

TakeNotes.PropTypes={
  callBackfromApp:PropTypes.func,
  note:PropTypes.obejct
}
TakeNotes.defaultProps={
  callBackfromApp:()=>null,
  note:[]
}
export default TakeNotes;
