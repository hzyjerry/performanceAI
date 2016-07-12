/*globals COURSES:true */
import React, { Component } from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'


class App extends Component {
  render() {
    return (
        <div>
          <GlobalNav />
          <div id="page-wrapper">
            <div className="container-fluid">
              <div className="col-lg-12">
                {this.props.children || <Dashboard courses={COURSES} />}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

module.exports = App
