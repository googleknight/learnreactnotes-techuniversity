import React, { Component } from 'react';
import './App.css';
import NoteForm from '../NoteForm/NoteForm';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <main>
          <Header>Start taking notes</Header>
          <NoteForm className='Noteform'/>
          <Footer>About Us</Footer>
        </main>
      </div>
    );
  }
}

export default App;
