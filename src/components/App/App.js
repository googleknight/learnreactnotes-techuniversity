import React, { Component } from 'react';
import './App.css';
import TakeNotes from '../TakeNotes/TakeNotes';
import ViewNotes from '../ViewNotes/ViewNotes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewPage: 'TakeNotes',
      notes:[],
    };
  }
  getNotes=(note)=>{
    let updatednotes=this.state.notes;
    updatednotes.push(note);
    this.setState({notes:updatednotes});
  }
  updateViewPage=(view)=>{
    this.setState({viewPage:view});
  }
  render() {
    let toView = '';
    if (this.state.viewPage === 'TakeNotes') {
      toView = (<TakeNotes 
        callBackfromApp={this.getNotes} 
        updatePage={this.updateViewPage}/>);
    } 
    else {
      toView = (<ViewNotes 
        notes={this.state.notes} 
        updatePage={this.updateViewPage}/>);
    }
    return (
      <div className="container" >
        {toView}
      </div>
    );
  }
}

export default App;
