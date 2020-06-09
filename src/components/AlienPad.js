import React from 'react';


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
      <div className='alien-pad'
      id={this.props.id}
      onClick={this.handleClick}
      >
        <h1>{letter}</h1>
        <audio
        ref={ref => this.audio = ref}
        src={audio}
        id={id}
        >
        </audio>
      </div>
    )
  }
}


export default AlienPad;
