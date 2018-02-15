import React, { Component } from 'react';
import './TextBox.css'
class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state={
      className:'text-area'
    }
  }
  handleTextChange(event) {
    const length=event.target.value.length;
    if(length===this.props.maxlength)
      this.setState({className:'text-area-red'});
    else if(length<this.props.maxlength)
    this.setState({className:'text-area'});
  }
  render() {
    return (
        <div>
            <textarea
              className={this.state.className}
              rows={this.props.row}
              onChange={
                (event)=>
                  {
                    this.handleTextChange(event)
                    this.props.countChars(event)
                  }
              }
              maxlength={this.props.maxlength}>
            </textarea>
        </div>
    );
  }
}

export default TextBox;