import React, { Component } from 'react';
import './Footer.css';
import PropTypes from 'prop-types';
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
Footer.propTypes={
  onClick:PropTypes.func
}
Footer.defaultProps={
  onClick:()  =>null,
}

export default Footer;
