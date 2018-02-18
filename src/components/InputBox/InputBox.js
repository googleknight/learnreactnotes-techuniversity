import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputBox.css';

class InputBox extends Component {
  render() {
    return (
      <div>
        <input
          className='input-box'
          type='text'
          placeholder={this.props.placeholder}
          onChange={(event) => {
              this.props.getText(event);
            }}
          value={this.props.value}
        />
      </div>
    );
  }
}
InputBox.propTypes={
  placeholder:PropTypes.string,
  getText:PropTypes.func
}
InputBox.defaultProps={
  placeholder:'Type here',
  getText:()  =>null,
}


export default InputBox;
