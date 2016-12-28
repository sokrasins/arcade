import React from 'react'
import arcadeSound from '../audio/arcade.mp3'

class AudioPlayer extends React.Component {
  render () {
    return (
      <audio>
        <source src={arcadeSound} type="audio/mpeg" />
        Your browser does not support the audio content
      </audio>
    )
  }
}

export default AudioPlayer
