import React from 'react';


class AlienPad extends React.Component {

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
