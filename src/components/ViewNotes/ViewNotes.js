import React, { Component } from 'react';
import './ViewNotes.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notes from '../Notes/Notes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNote,changePage } from "../../redux/actions";

class ViewNotes extends Component {
  handleOnClick=(event)=>{
    this.props.changePage();
  }
  updateNote=(key,body,title)=>{
    this.props.onUpdate(key,body,title);
  }
  render() {
    let notesList=this.props.notes.map((note)=>{
      return(<Notes key= {note.key} callBackfromViewNotes={this.updateNote} note={note}/>);
    })
    return (
      <div className="ViewNotes">
        <Header>ViewNotes</Header>
        <div className='ViewNotesContainer'>{notesList}</div>
        <button className="view-nav-button" onClick={this.handleOnClick}>Create a New Note</button>
        <Footer >Create new Note</Footer>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notes:state.notes.notes,
});

const mapDispatchToProps = dispatch => ({
  onUpdate: ((key, body, title) => {

    dispatch(changePage('TakeNotes', { key, body, title }))
   }),
   changePage:(()=>{dispatch(changePage('TakeNotes', {}));
  })

});

// ViewNotes.PropTypes={
//   notes:PropTypes.object,
//   updatePage:PropTypes.func,
//   updatePageWithKey:PropTypes.func
// }
// ViewNotes.defaultProps={
//   notes:[],
//   updatePage:()=>null,
//   updatePageWithKey:()=>null
// }

export default connect(mapStateToProps, mapDispatchToProps)(ViewNotes);

