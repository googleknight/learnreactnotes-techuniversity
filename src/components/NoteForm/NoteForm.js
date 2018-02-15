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
    }
  }
  countChars=(event)=>{
    this.setState({charsleft:this.state.maxlength-event.target.value.length})
  }
  render() {
    return (
      <div className='form'>
        <div className='titleContainer'>
            <Title>Note Title</Title>
            <LangButton>en</LangButton>
        </div>
        <InputBox placeholder='Tasks for today'></InputBox>
        <MessageItalics >Please type your note below</MessageItalics>
        <TextBox 
          row='25' 
          maxlength={this.state.maxlength} 
          countChars={this.countChars}>
        </TextBox>
        <div className='saveButtonContainer'>
            <SaveButton>Save</SaveButton>
            <Message>{this.state.charsleft+` characters left`}</Message>
        </div>    
      </div>
    );
  }
}

export default NoteForm;