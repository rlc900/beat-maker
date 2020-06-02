import React, { useState } from 'react';
import Emoji from './components/Emoji'
import NavBar from './components/NavBar'
import {withRouter} from 'react-router-dom';
import MIDISounds from 'midi-sounds-react';
import './App.css';


class App extends React.Component {
  playTestInstrument() {
        this.midiSounds.playChordNow(3, [60], 2.5);
    }
  render() {
    return (
      <div className="App">
          <NavBar/>
        <h1 className='header'>BEAT <Emoji symbol='🎧' label='headphones'/> MAKER</h1>
        <p><button onClick={this.playTestInstrument.bind(this)}>Play</button></p>
        <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />
      </div>
    );
  }
}


export default withRouter(App);

  // <MIDISounds ref={(ref) => (console.log(midiSounds))} appElementName="root" instruments={[3]} />
