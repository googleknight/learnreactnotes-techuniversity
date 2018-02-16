import React, { Component } from 'react';
import './LangButton.css';

class LangButton extends Component {
  render() {
    return (
      <button className="lang" type="button">{this.props.children}</button>
    );
  }
}

export default LangButton;
