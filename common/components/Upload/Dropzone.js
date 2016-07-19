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
        <div className="row">
          <Dropzone onDrop={this.onDrop} style={{
            width: '100%',
            align: 'center',
            height: '30px',
            'border-width': '1px',
            'border-color': "#666",
            'border-style':"dashed",
            'border-radius':"2px"
          }}>
            <div>{"  Try dropping some files here, or click to select files to upload."}</div>
          </Dropzone>
          <div className="col-xs-8">
            <ul>
              {this.state.files.map(function(file) {
                return <li> {file.name}</li>
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