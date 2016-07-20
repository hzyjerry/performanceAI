import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import activeComponent from 'react-router-active-component'

var NavLi = activeComponent('li')

class NavLink extends React.Component {
	render() {
	  var {ready, icon, uploadedFile, name, link} = this.props

	  var disabled = classNames({'disabled': !ready & !uploadedFile})
	  var iconClass = classNames('fa', 'fa-fw', icon)
	  var dest = (!ready & !uploadedFile)? "": link
	  var linkProps
	  if (!ready & !uploadedFile) {
	  	linkProps = {onClick: e => e.preventDefault(), activeClassName: "active"}
	  } else {
	  	linkProps = {}
	  }

	  return (
	    <NavLi to={dest} linkProps={linkProps} className={disabled}>
	  		<i className={iconClass}></i> {name}
	  	</NavLi>
	  )
	}
}


function mapStateToProps(state, ownProps) {
  return {
  	uploadedFile: state.uploadedFile
  };
}


export default connect(
	mapStateToProps
)(NavLink)