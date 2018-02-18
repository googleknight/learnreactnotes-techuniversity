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
      key:-1,
    };
  }
  findIndexByKey=(key)=>{
    let notes=this.state.notes;
    for(let i=0;i<notes.length;i++){
      if (notes[i].key===key){
        return i;
      }
    }
    return -1;
  }
  getNotes=(note,key)=>{
    let updatednote=note;
    let allNotes=this.state.notes;
    if(this.findIndexByKey(note.key)!=-1){
      allNotes[this.findIndexByKey(note.key)]=note;
    }
    else{
      note.key=allNotes.length+1;
      allNotes.push(note);
    }
    this.setState({notes:allNotes});
  }
  updateViewPage=(view)=>{
    this.setState({viewPage:view});
  }
  updatePageWithKey=(view,key)=>{
    this.setState({viewPage:view,key:this.findIndexByKey(key)});
  }
  render() {
    let toView = '';
    if (this.state.viewPage === 'TakeNotes') {
      toView = (<TakeNotes 
        callBackfromApp={this.getNotes} 
        updatePage={this.updateViewPage}
        note={this.state.key>-1?this.state.notes[this.state.key]:null}
        />);
    } 
    else {
      toView = (<ViewNotes 
        notes={this.state.notes} 
        updatePage={this.updateViewPage}
        updatePageWithKey={this.updatePageWithKey}
        />);
    }
    return (
      <div className="container" >
        {toView}
      </div>
    );
  }
}


export default App;
