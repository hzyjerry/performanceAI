import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class NavLink extends React.Component {
	render() {
	  return (
	    <li className={(this.props.active?"active": "") + ((!this.props.ready & !this.props.upload)? " disabled": "")}>
	      <Link to={this.props.link}><i className={"fa fa-fw " + this.props.icon}></i> {this.props.name}</Link>
	    </li>
	  )
	}
}

export default connect(
	state => ({ upload: state.upload })
)(NavLink)