import React from 'react'
import ReactDOM from 'react-dom'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.arcadeSound = require('file!./../audio/background.mp3');
    this.changeVolume = this.changeVolume.bind(this)
  }

  changeVolume(audioNode, targetVol) {
    let vol = audioNode.volume 
    // TODO: Change growth from linear to exponential
    vol = (targetVol>vol ? Math.min(vol+0.002, targetVol) : Math.max(vol-0.002, targetVol))

    audioNode.volume = vol
    console.log(vol)
    const stillGoing = (targetVol>vol ? vol<targetVol : vol>targetVol)
    if (stillGoing) {
      setTimeout(() => { this.changeVolume(audioNode, targetVol) }, 10)
    }
  }

  componentDidMount() {
    let audioNode = ReactDOM.findDOMNode(this.refs.soundfile)
    audioNode.volume = 0
    setTimeout(() => { this.changeVolume(audioNode, 1.0) }, 10)
  }

  render () {
    return (
      <audio ref='audio' ref="soundfile" muted={!this.props.audio} autoPlay loop> 
        <source src={this.arcadeSound} type="audio/mpeg" />
          Your browser does not support the audio content
      </audio>
    )
  }
}

export default AudioPlayer

