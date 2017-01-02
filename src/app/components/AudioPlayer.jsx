import React from 'react'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.arcadeSound = require('file!./../audio/arcade92.mp3');
  }

  render () {
    console.log('props: ', this.props)
    return (
      <audio ref='audio' muted={!this.props.audio} autoPlay loop> 
        <source src={this.arcadeSound} type="audio/mpeg" />
        Your browser does not support the audio content
      </audio>
    )
  }
}

export default AudioPlayer

// TODO: Add fading
