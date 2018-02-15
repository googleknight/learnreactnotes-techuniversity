import React, { Component } from 'react';
import Title from '../Title/Title';
import Message from '../Message/Message';
import MessageItalics from '../MessageItalics/MessageItalics'
import LangButton from '../LangButton/LangButton';
import SaveButton from '../SaveButton/SaveButton';
import TextBox from '../TextBox/TextBox';
import InputBox from '../InputBox/InputBox';
import './NoteForm.css';
class NoteForm extends Component {
  constructor(props){
    super(props)
    this.state={
      maxlength:120,
      charsleft:120,
      notesTitle:'',
      notesBody:'',
      notes:[],
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
      notesArray.push({notesTitle:this.state.notesTitle,notesBody:this.state.notesBody})
      this.setState({notes:notesArray,notesTitle:'',notesBody:'',charsleft:this.state.maxlength})
      console.log(this.state.notes)
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
            <SaveButton onClick={this.saveData}>Save</SaveButton>
            <Message>{this.state.charsleft+` characters left`}</Message>
        </div>    
      </div>
    );
  }
}

export default NoteForm;