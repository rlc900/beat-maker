import React from 'react';
import {Grid, Button} from 'semantic-ui-react'


class AlienPad extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
  }


  render() {
    let {id, letter, audio} = this.props
    console.log(this.props)
    return(
      <div>
      <Grid relaxed columns={3} divided centered>
        <Grid.Row columns='three'>
          <Grid.Column color='black' computer={3}>
            <Button
              id={this.props.id}
              onClick={this.handleClick}
              role='audio'
              >
            {letter}
            <audio
              ref={ref => this.audio = ref}
              src={audio}
              id={id}
              >
            </audio>
            </Button>
         </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    )
  }
}


export default AlienPad;

// this is a test comment
