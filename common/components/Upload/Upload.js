import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { upload } from '../../actions'

class Upload extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div>
        <h2>Upload</h2>
        <button onClick={() => onClick()} type="button" className="btn btn-lg btn-default" id="progress_test">Upload</button>
      </div>
    )
  }  

  componentDidMount() {
    $("#progress_test").on("click", function Example1(event){    
      $.LoadingOverlay("show");

      // Hide it after 3 seconds
      setTimeout(function(){
          $.LoadingOverlay("hide");
      }, 3000);
    })
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
    onClick: () => {
      dispatch(upload())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload)
