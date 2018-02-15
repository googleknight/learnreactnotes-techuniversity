import React, { Component } from 'react';
import './InputBox.css'
class InputBox extends Component {
  render() {
    return (
        <div>
          <input 
            type='text'
            placeholder={this.props.placeholder}
            onChange={(event)=>{
              this.props.getText(event)
            }}
          />
        </div>
    );
  }
}

export default InputBox;