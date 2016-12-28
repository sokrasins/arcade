import { connect } from 'react-redux'
import TextOutput from '../components/TextOutput'

const mapStateToProps = (state) => {
  return {
    text: state.dialog.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const TextDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(TextOutput)
export default TextDisplayContainer
