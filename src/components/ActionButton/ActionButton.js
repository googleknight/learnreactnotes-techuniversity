import React, { Component } from 'react';
import './ActionButton.css';

class ActionButton extends Component {
  render() {
    return (
      <button
        className="action-Button"
        type="button"
        onClick={(event) => {
          this.props.onClick(event);
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default ActionButton;
