import React, { Component } from 'react';
import './ViewNotes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
import PropTypes from 'prop-types';
class ViewNotes extends Component {
  handleOnClick=(event)=>{
    this.props.updatePage('TakeNotes');
  }
  sendKey=(key)=>{
    this.props.updatePageWithKey('TakeNotes',key);
  }
  render() {
    let notesList=this.props.notes.map((note)=>{
      return(<Notes key= {note.key} callBackfromViewNotes={this.sendKey} note={note}/>);
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
ViewNotes.PropTypes={
  notes:PropTypes.object,
  updatePage:PropTypes.func,
  updatePageWithKey:PropTypes.func
}
ViewNotes.defaultProps={
  notes:[],
  updatePage:()=>null,
  updatePageWithKey:()=>null
}


export default ViewNotes;
