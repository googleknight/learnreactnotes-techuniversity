import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'text-area',
    };
  }
  handleTextChange(event) {
    const length = event.target.value.length;
    if (length === this.props.maxlength) { this.setState({ className: 'text-area-red' }); } else if (length < this.props.maxlength) { this.setState({ className: 'text-area' }); }
  }
  render() {
    return (
      <div>
        <textarea
          className={this.state.className}
          rows={this.props.row}
          onChange={
                (event) => {
                    this.handleTextChange(event);
                    this.props.countChars(event);
                    this.props.getText(event);
                  }
              }
          maxLength={this.props.maxlength}
          value={this.props.value}
        />
      </div>
    );
  }
}

TextBox.PropTypes={
  maxlength:PropTypes.number,
  row:PropTypes.number,
  countChars:PropTypes.func,
  getText:PropTypes.func
}
TextBox.defaultProps={
  maxlength:150,
  row:10,
  countChars:()=>null,
  getText:()=>null
}

export default TextBox;