import React from 'react'

class Application extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">
                Application <small>All Uploads</small>
            </h1>
            <ol className="breadcrumb">
                <li className="active">
                    <i className="fa fa-dashboard"></i> Application
                </li>
            </ol>
        </div>
      </div>
    )
  }

}

export default Application
