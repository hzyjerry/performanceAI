import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
var classNames = require('classnames');

class NavLink extends React.Component {
	render() {
	  var {active, ready, uploadedFile, icon, name, link} = this.props

	  var activeClass = classNames({'active': active, 'disabled': !ready & !uploadedFile})
	  var linkClass = classNames('fa', 'fa-fw', icon)
	  var dest = (!ready & !uploadedFile)? "": link
	  if (!ready & !uploadedFile) {
	  	dest = <Link to={dest} onClick={e => e.preventDefault()}><i className={linkClass}></i> {name}</Link>
	  } else {
	  	dest = <Link to={dest}><i className={linkClass}></i> {name}</Link>
	  }

	  return (
	    <li className={activeClass}>
	      {dest}
	    </li>
	  )
	}
}

export default connect(
	state => ({ uploadedFile: state.uploadedFile })
)(NavLink)