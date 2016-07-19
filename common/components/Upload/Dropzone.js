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

    render: function () {
      return (
          <div>
            <Dropzone onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
            <div>
              <ul>
                {this.state.files.map(function(file) {
                  return <li> {file.name}</li>
                })} 
              </ul>
            </div>
          </div>
      );
    }
});

export default DropzoneDemo