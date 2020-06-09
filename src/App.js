import React, { useState } from 'react';
// import {withRouter} from 'react-router-dom';
// import {Switch, Route} from 'react-router'
import AlienPad from './components/AlienPad'
import Emoji from './components/Emoji'
import './App.css';

const martianScanner = new Audio('martianScanner.mp3')

class App extends React.Component {

  data = [
    {id: 'martianScanner', letter: 'Q', audio: 'martianScanner.mp3'}
  ]

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='header'>Martian <Emoji symbol='👽' label='headphones'/> Pad</h1>
        </header>
        {this.data.map(d => (
          <AlienPad
          id={d.id}
          letter={d.letter}
          src={d.audio}
          />
        ))}
      </div>
    );
  }
}


export default App;
