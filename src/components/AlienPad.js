import React from 'react';
import {Button, Grid} from 'semantic-ui-react'


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
          <Grid.Column width={3}>
            <Button
              id={this.props.id}
              onClick={this.handleClick}
              role='audio'
              inverted color='blue'
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
      </div>
    )
  }
}


export default AlienPad;
