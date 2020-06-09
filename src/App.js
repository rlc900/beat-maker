import React from 'react';
import AlienPad from './components/AlienPad'
import Emoji from './components/Emoji'
import './App.css';

// const martianScanner = new Audio('martianScanner.mp3')

const data = [
  {id: 'martianScanner', letter: 'Q', audio: 'martianScanner.mp3'}
]

class App extends React.Component {

  state = {
    display: ''
  }


  render() {
    console.log(data.audio)
    return (
      <div className="App">
        <header>
          <h1 className='header'>Martian <Emoji symbol='👽' label='headphones'/> Pad</h1>
        </header>
        {data.map(d => (
          <AlienPad
          id={d.id}
          letter={d.letter}
          audio={d.audio}
          handleDisplay={this.handleDisplay}
          />
        ))}
      </div>
    );
  }
}


export default App;
