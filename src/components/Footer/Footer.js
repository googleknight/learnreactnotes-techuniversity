import React, { Component } from 'react';
import './Footer.css';
import PropTypes from 'prop-types';


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>{this.props.children}</p>
      </div>
    );
  }
}


export default Footer;
