/* Main Application Frame */

import React, { Component } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import GlobalNav from '../GlobalNav/GlobalNav'


class App extends Component {
  render() {
    return (
        <div>
          <GlobalNav />
          <div id="page-wrapper">
            <div className="container-fluid">
              <div className="col-lg-12">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

module.exports = App
