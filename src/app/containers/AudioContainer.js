import { connect } from 'react-redux'
import AudioPlayer from '../components/AudioPlayer'

const mapStateToProps = (state) => {
  return {
    audio: state.audio
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AudioContainer = connect(mapStateToProps, mapDispatchToProps)(AudioPlayer)
export default AudioContainer
