import React, { Component } from 'react';
import './InputBox.css'
class InputBox extends Component {
  render() {
    return (
        <div>
          <input type='text' placeholder={this.props.placeholder}/>
        </div>
    );
  }
}

export default InputBox;