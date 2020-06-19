import React from 'react';
import AlienPad from './components/AlienPad'
import Emoji from './components/Emoji'
import {Grid, Header} from 'semantic-ui-react'
import './App.css';

const data = [
  {id: 'spaceWub', letter: 'Q', audio: 'spaceWub.mp3'},
  {id: 'alienWeapon', letter: 'W', audio: 'alienWeapon.mp3'},
  {id: 'alienMachineGun', letter: 'E', audio: 'alienMachineGun.mp3'},
  {id: 'powerUp', letter: 'A', audio: 'powerUp.mp3'},
  {id: 'alienClick', letter: 'S', audio: 'alienClick.mp3'},
  {id: 'alienDrip', letter: 'D', audio: 'alienDrip.wav'},
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
        <Header
        as='h1'
        className='header'
        textAlign='left'
        color='white'
        >
          <Emoji symbol='👽' label='headphones'/> Martian Pad
        </Header>
        <Grid centered>
          <Grid.Row columns={3}>
          {data.map(d => (
              <Grid.Column>
              <AlienPad
              id={d.id}
              letter={d.letter}
              audio={d.audio}
              handleDisplay={this.handleDisplay}
              />
              </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>

      </div>
    );
  }
}


export default App;
