import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { analyzeFiles } from '../../actions'
import DropzoneDemo from './Dropzone'

class Upload extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div>
        <h2>Upload</h2>
        <DropzoneDemo />
        <button onClick={() => onClick(this.props)} type="button" className="btn btn-lg btn-default" id="progress_test">Upload</button>
      </div>
    )
  }
}

Upload.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (props) => {
      dispatch(analyzeFiles(props))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
