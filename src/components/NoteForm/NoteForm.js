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
      maxlength:120
    }
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
        <TextBox row='25' maxlength={this.state.maxlength}>
        </TextBox>
        <div className='saveButtonContainer'>
            <SaveButton>Save</SaveButton>
            <Message>150 characters</Message>
        </div>    
      </div>
    );
  }
}

export default NoteForm;