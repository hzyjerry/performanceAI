import React, { Component } from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

/*
styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}
*/

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/calendar">Performance AI</Link>
          </div>
          <ul className="nav navbar-right top-nav">
              <li className="dropdown">
                  <Link to="/" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-envelope"></i> <b className="caret"></b></Link>
                  <ul className="dropdown-menu message-dropdown">
                      <li className="message-preview">
                          <Link to="/">
                              <div className="media">
                                  <span className="pull-left">
                                      <img className="media-object" src="http://placehold.it/50x50" alt=""></img>
                                  </span>
                                  <div className="media-body">
                                      <h5 className="media-heading"><strong>John Smith</strong>
                                      </h5>
                                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                  </div>
                              </div>
                          </Link>
                      </li>
                      <li className="message-preview">
                          <Link to="/">
                              <div className="media">
                                  <span className="pull-left">
                                      <img className="media-object" src="http://placehold.it/50x50" alt=""></img>
                                  </span>
                                  <div className="media-body">
                                      <h5 className="media-heading"><strong>John Smith</strong>
                                      </h5>
                                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                  </div>
                              </div>
                          </Link>
                      </li>
                      <li className="message-preview">
                          <Link to="/">
                              <div className="media">
                                  <span className="pull-left">
                                      <img className="media-object" src="http://placehold.it/50x50" alt=""></img>
                                  </span>
                                  <div className="media-body">
                                      <h5 className="media-heading"><strong>John Smith</strong>
                                      </h5>
                                      <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                  </div>
                              </div>
                          </Link>
                      </li>
                      <li className="message-footer">
                          <Link to="/">Read All New Messages</Link>
                      </li>
                  </ul>
              </li>
              <li className="dropdown">
                  <Link to="/" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-bell"></i> <b className="caret"></b></Link>
                  <ul className="dropdown-menu alert-dropdown">
                      <li>
                          <Link to="/">Alert Name <span className="label label-default">Alert Badge</span></Link>
                      </li>
                      <li>
                          <Link to="/">Alert Name <span className="label label-primary">Alert Badge</span></Link>
                      </li>
                      <li>
                          <Link to="/">Alert Name <span className="label label-success">Alert Badge</span></Link>
                      </li>
                      <li>
                          <Link to="/">Alert Name <span className="label label-info">Alert Badge</span></Link>
                      </li>
                      <li>
                          <Link to="/">Alert Name <span className="label label-warning">Alert Badge</span></Link>
                      </li>
                      <li>
                          <Link to="/">Alert Name <span className="label label-danger">Alert Badge</span></Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <Link to="/">View All</Link>
                      </li>
                  </ul>
              </li>
              <li className="dropdown">
                  <Link to="/" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></Link>
                  <ul className="dropdown-menu">
                      <li>
                          <Link to="/"><i className="fa fa-fw fa-user"></i> Profile</Link>
                      </li>
                      <li>
                          <Link to="/"><i className="fa fa-fw fa-envelope"></i> Inbox</Link>
                      </li>
                      <li>
                          <Link to="/"><i className="fa fa-fw fa-gear"></i> Settings</Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                          <Link to="/"><i className="fa fa-fw fa-power-off"></i> Log Out</Link>
                      </li>
                  </ul>
              </li>
          </ul>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav side-nav">
                  <li className="active">
                      <Link to="/calendar"><i className="fa fa-fw fa-dashboard"></i> Dashboard</Link>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</Link>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-table"></i> Tables</Link>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-edit"></i> Forms</Link>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</Link>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</Link>
                  </li>
                  <li>
                      <Link to="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></Link>
                      <ul id="demo" className="collapse">
                          <li>
                              <Link to="/">Dropdown Item</Link>
                          </li>
                          <li>
                              <Link to="/">Dropdown Item</Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-file"></i> Blank Page</Link>
                  </li>
                  <li>
                      <Link to="/calendar"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</Link>
                  </li>
              </ul>
          </div>
      </nav>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Ryan Florence'
  }
}

export default GlobalNav
