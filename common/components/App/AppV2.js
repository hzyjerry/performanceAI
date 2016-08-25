/* Main Application Frame */

import React, { Component } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import GlobalNavV2 from '../GlobalNav/GlobalNavV2'


class AppV2 extends Component {
  render() {
    return (
        <div>
          <GlobalNavV2 />
          <div id="page-wrapper">
            <div className="container-fluid">
              <div id="overlay">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default  AppV2
