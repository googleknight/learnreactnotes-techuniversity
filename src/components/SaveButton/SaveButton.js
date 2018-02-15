import React, { Component } from 'react';
import './SaveButton.css';
class SaveButton extends Component {
  render() {
    return (
      <button 
        className='saveButton' 
        type='button'
        onClick={(event)=>{
          this.props.onClick(event)
        }}
        >
        {this.props.children}</button>
    );
  }
}

export default SaveButton;