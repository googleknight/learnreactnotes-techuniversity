import React, { Component } from 'react';
import Title from '../Title/Title';
import Message from '../Message/Message';
import MessageItalics from '../MessageItalics/MessageItalics'
import LangButton from '../LangButton/LangButton';
import ActionButton from '../ActionButton/ActionButton';
import TextBox from '../TextBox/TextBox';
import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import './NoteForm.css';
class NoteForm extends Component {
  constructor(props){
    super(props)
    this.state={
      maxlength:120,
      charsleft:120,
      notesTitle:this.props.note!=null?this.props.note.notesTitle:'',
      notesBody:this.props.note!=null?this.props.note.notesBody:'',
      notes:this.props.note!=null?this.props.note:[],
    }
  }
  countChars=(event)=>{
    this.setState({charsleft:this.state.maxlength-event.target.value.length});
  }
  getTitle=(event)=>{
    this.setState({notesTitle:event.target.value});
  }
  getBody=(event)=>{
    this.setState({notesBody:event.target.value});
  }
  saveData=(event)=>{
   // if(this.state.notesBody.length!=0 && this.notesTitle.length!=0){
      let notesArray=this.state.notes;
      let currNote ={notesTitle:this.state.notesTitle,notesBody:this.state.notesBody,key:this.state.notes.key}
      this.setState({notesTitle:'',notesBody:'',charsleft:this.state.maxlength})
      this.props.callBackfromNotes(currNote);
   // }

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
          value={this.state.notesTitle}
        />
        <MessageItalics>Please type your note below</MessageItalics>
        <TextBox 
          row='25' 
          maxlength={this.state.maxlength} 
          countChars={this.countChars}
          getText={this.getBody}
          value={this.state.notesBody}
          />
        <div className='saveButtonContainer'>
            <ActionButton onClick={this.saveData}>Save</ActionButton>
            <Message>{this.state.charsleft+` characters left`}</Message>
        </div>    
      </div>
    );
  }
}
NoteForm.propTypes = {
  callBackfromNotes: PropTypes.func,
  note:PropTypes.object
}

NoteForm.defaultProps = {
  callBackfromNotes: ()=>null,
  note:[]
};
export default NoteForm;