import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
var classNames = require('classnames');

class NavLink extends React.Component {
	render() {
	  var {active, ready, upload, icon, name, link} = this.props

	  var activeClass = classNames({'active': active, 'disabled': !ready & !upload})
	  var linkClass = classNames('fa', 'fa-fw', icon)
	  var dest = (!ready & !upload)? "": link
	  var onclick = (!ready & !upload)? "": e => e.preventDefault()

	  return (
	    <li className={activeClass}>
	      <Link to={dest} onclick={onclick}><i className={linkClass}></i> {name}</Link>
	    </li>
	  )
	}
}

export default connect(
	state => ({ upload: state.upload })
)(NavLink)