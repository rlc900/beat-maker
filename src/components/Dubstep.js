import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import {Button} from 'semantic-ui-react'


const Dubstep = () => {


const playSound = () => {
  return <ReactAudioPlayer
  src="martianScanner.mp3"
  autoPlay
  controls
  />
}
    return (
      <div>
      <Button
      inverted color='black'
      onClick={playSound}
      >
      Martian Sound
       </Button>
      </div>
    )

}

export default Dubstep;

// import MIDISounds from 'midi-sounds-react';

// playTestDrum() {
//       this.midiSounds.playDrumsNow([16]);
//   }
// <p><button onClick={this.playTestDrum.bind(this)}>Play</button></p>
// <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[16]} />
