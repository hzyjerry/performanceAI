import React, {PropTypes } from 'react'
import { connect } from 'react-redux'
import upload from '../../actions'

function Upload({onClick}) {
  return (
    <div>
      <h2>Upload</h2>
      <button onClick={() => onClick()} type="button" className="btn btn-lg btn-default">Upload</button>
    </div>
  )
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
    onClick: () => {
      dispatch(upload)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
