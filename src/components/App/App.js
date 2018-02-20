import React, { Component } from 'react';
import './App.css';
import TakeNotes from '../TakeNotes/TakeNotes';
import  ViewNotes  from '../ViewNotes/ViewNotes';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    let toView = '';
    if (this.props.page === 'TakeNotes') {
      toView = (<TakeNotes />);
    } else {
      toView = (<ViewNotes />);
    }
    return (
      <div className="container" >
        {toView}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  page: state.navigation.page,
  currentNote: {
    ...state.navigation.currentNote,
  },
});

export default connect(mapStateToProps,null)(App);
