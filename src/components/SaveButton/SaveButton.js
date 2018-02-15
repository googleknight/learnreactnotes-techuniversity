import React, { Component } from 'react';
import './SaveButton.css';
class SaveButton extends Component {
  render() {
    return (
      <button class='saveButton' type='button'>{this.props.children}</button>
    );
  }
}

export default SaveButton;