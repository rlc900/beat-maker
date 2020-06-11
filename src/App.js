import React from 'react';
import AlienPad from './components/AlienPad'
import Emoji from './components/Emoji'
import './App.css';

const data = [
  {id: 'martianScanner', letter: 'Q', audio: 'martianScanner.mp3'},
  {id: 'alienWeapon', letter: 'W', audio: 'alienWeapon.mp3'},
  {id: 'alienMachineGun', letter: 'E', audio: 'alienMachineGun.mp3'},
  {id: 'powerUp', letter: 'A', audio: 'powerUp.mp3'},
  {id: 'synthDrum', letter: 'Z', audio: 'synthDrum.wav'},
  {id: 'claveDrum', letter: 'X', audio: 'claveDrum.wav'},
  {id: 'kickDrum', letter: 'C', audio: 'kickDrum.wav'}

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
