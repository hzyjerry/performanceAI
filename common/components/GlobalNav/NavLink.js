import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
var classNames = require('classnames');

class NavLink extends React.Component {
	render() {
		var activeClass = classNames({'active': this.props.active, 'disabled': !this.props.ready & !this.props.upload})
		var linkClass = classNames('fa', 'fa-fw', this.props.icon)
	  return (
	    <li className={activeClass}>
	      <Link to={this.props.link}><i className={linkClass}></i> {this.props.name}</Link>
	    </li>
	  )
	}
}

export default connect(
	state => ({ upload: state.upload })
)(NavLink)