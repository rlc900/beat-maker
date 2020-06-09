import React from 'react';


class AlienPad extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div className='alien-pad' id={this.props.id}>

      </div>
    )
  }
}


export default AlienPad;
