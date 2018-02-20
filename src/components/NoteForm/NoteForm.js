import React, { Component } from 'react';
import Title from '../Title/Title';
import Message from '../Message/Message';
import MessageItalics from '../MessageItalics/MessageItalics'
import LangButton from '../LangButton/LangButton';
import ActionButton from '../ActionButton/ActionButton';
import TextBox from '../TextBox/TextBox';
import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNote,changePage } from "../../redux/actions";
import './NoteForm.css';
class NoteForm extends Component {
  constructor(props){
    super(props);
    this.state={
      maxlength:120,
      charsleft:120,
      key:this.props.key,
      title: this.props.title,
      body: this.props.body,
    }
  }
  countChars=(event)=>{
    this.setState({charsleft:this.state.maxlength-event.target.value.length});
  }
  getTitle=(event)=>{
    this.setState({title:event.target.value});
  }
  getBody=(event)=>{
    this.setState({body:event.target.value});
  }
  saveData=(event)=>{
  //  let currNote ={notesTitle:this.state.notesTitle,notesBody:this.state.notesBody,key:this.state.notes.key};
  this.setState({title:'',body:'',charsleft:this.state.maxlength});
  //  this.props.callBackfromNotes(currNote);
   this.props.onSave(this.props.id, this.state.body, this.state.title);
  }
  render() {
    return (
      <div className='form'>
        <div className='titleContainer'>
            <Title>Note Title</Title>
            <LangButton>en</LangButton>
        </div>
        <InputBox 
          placeholder='Tasks for today'
          getText={this.getTitle}
          value={this.state.title}
        />
        <MessageItalics>Please type your note below</MessageItalics>
        <TextBox 
          row='25' 
          maxlength={this.state.maxlength} 
          countChars={this.countChars}
          getText={this.getBody}
          value={this.state.body}
          />
        <div className='saveButtonContainer'>
            <ActionButton onClick={this.saveData}>Save</ActionButton>
            <Message>{this.state.charsleft+` characters left`}</Message>
        </div>    
        <button className='view-navgiation-button' onClick={()=>this.props.changePage()}>ViewNotes</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  id: state.navigation.currentNote.key,
  title: state.navigation.currentNote.title,
  body: state.navigation.currentNote.body,
});

const mapDispatchToProps = dispatch => ({
  onSave: ((key, body, title) => {
    dispatch(createNote({ key, body, title }));
  }),
  changePage: ()=>dispatch(changePage('viewnotes', undefined)),
});


// NoteForm.propTypes = {
//   callBackfromNotes: PropTypes.func,
//   note:PropTypes.object
// }

// NoteForm.defaultProps = {
//   callBackfromNotes: ()=>null,
//   note:[]
// };
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);