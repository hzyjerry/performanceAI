import React from 'react'

class Analytics extends React.Component {

  render() {
    console.log("analytics")
    return (
      <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">
                Analytics <small>All Analytics</small>
            </h1>
            <ol className="breadcrumb">
                <li className="active">
                    <i className="fa fa-dashboard"></i> Analytics
                </li>
            </ol>
            {this.props.children}
        </div>
      </div>
    )
  }

}

export default Analytics
