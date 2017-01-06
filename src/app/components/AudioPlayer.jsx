import React from 'react'
import ReactDOM from 'react-dom'

// TODO: Drive all audio volume levels with redux state
class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.audio = {
      'background': require('file!./../audio/background.mp3'),
      'machine': require('file!./../audio/machines.mp3')
    }
    this.changeVolume = this.changeVolume.bind(this)
  }

  // TODO: Change input params to: ([startVol], endVol, period)
  changeVolume(audioNode, curVol, targetVol) {
    let vol = audioNode.volume 
    curVol = (targetVol>curVol ? Math.min(curVol+0.002, targetVol) : Math.max(curVol-0.002, targetVol))

    audioNode.volume = (Math.exp(curVol)-1)/(Math.E-1)
    console.log(audioNode.volume)
    const stillGoing = (targetVol>curVol ? curVol<targetVol : curVol>targetVol)
    if (stillGoing) {
      setTimeout(() => { this.changeVolume(audioNode, curVol, targetVol) }, 20)
    }
  }

  componentDidMount() {
    let machineNode = ReactDOM.findDOMNode(this.refs.machine)
    machineNode.volume = 0
    setTimeout(() => { this.changeVolume(machineNode, 0.0, 0.1) }, 20)

    let backgroundNode = ReactDOM.findDOMNode(this.refs.background)
    backgroundNode.volume = 0
    setTimeout(() => { this.changeVolume(backgroundNode, 0.0, 1.0) }, 20)

  }

  render () {
    return (
      <div>
        <audio ref='background' muted={!this.props.audio} autoPlay loop> 
          <source src={this.audio.background} type="audio/mpeg" />
            Your browser does not support the audio content
        </audio>
        <audio ref='machine' muted={!this.props.audio} autoPlay loop> 
          <source src={this.audio.machine} type="audio/mpeg" />
            Your browser does not support the audio content
        </audio>
      </div>
    )
  }
}

export default AudioPlayer

