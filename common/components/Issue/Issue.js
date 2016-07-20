import React from 'react'

class Issue extends React.Component {

  render() {
    return (
	    <div className="alert alert-danger">
	        <strong>Issue {this.props.params.id}</strong> Abnormal bump in performance
	    </div>
    )
  }

}

export default Issue
