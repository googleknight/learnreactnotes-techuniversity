import React, { Component } from 'react';
import './Footer.css';
import ActionButton from '../ActionButton/ActionButton';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ActionButton onClick={this.props.onClick} >{this.props.children}</ActionButton>
      </div>
    );
  }
}


export default Footer;
