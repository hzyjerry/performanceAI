import React, {PropTypes, Component} from 'react'
var Dropzone = require('react-dropzone');


var DropzoneDemo = React.createClass({
    getInitialState: function () {
        return {
          files: []
        };
    },

    onDrop: function (fs) {
      console.log('Received files: ', fs);
      this.setState({
        files: this.state.files.concat(fs)
      });
    },

    onOpenClick: function () {
      this.refs.dropzone.open();
    },

    attachDelete: function(file) {
      self = this
      return function() {
        var index = self.state.files.findIndex(function(f) {
          return f.name === file.name
        })
        console.log(index)
        var newFiles = self.state.files
        if (index > -1) {
            newFiles.splice(index, 1);
        }
        self.setState({
          files: newFiles
        });
      }
    },

    render: function () {
      self = this

      return (
        <div className="row">
          <Dropzone onDrop={this.onDrop} style={{
            width: '100%',
            align: 'center',
            height: '30px',
            borderWidth: '1px',
            borderColor: "#666",
            borderStyle:"dashed",
            borderRadius:"2px"
          }}>
            <div>{"  Try dropping some files here, or click to select files to upload."}</div>
          </Dropzone>
          <div className="col-xs-8">
            <ul>
              {this.state.files.map(function(file) {
                return (
                  <li> {file.name}
                    <button type="button" className="btn btn-xs btn-danger" onClick={self.attachDelete(file)}>Delete</button>
                  </li>
                )
              })} 
            </ul>
          </div>
          <div className="col-xs-4">
            <button onClick={() => this.props.click(this.props)} type="button" className="btn btn-lg btn-default" id="progress_test">Upload</button>
          </div>
        </div>
      );
    }
});

export default DropzoneDemo