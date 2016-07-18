import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { upload } from '../../actions'
var request = require('superagent');

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
      $("#overlay").LoadingOverlay("show", {
        image       : "",
        fontawesome : "fa fa-spinner fa-spin"
      });

      request
        .post('/upload')
        .send({ name: 'Manny', species: 'cat' })
        .set('Accept', 'application/json')
        .end(function(err, res) {
          console.log("received response")
          console.log(res)
          $("#overlay").LoadingOverlay("hide");
        });
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
