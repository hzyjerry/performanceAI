import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './summary.css'

class SummaryUserIndex extends Component {
  render() {
    return (
      <div className="Image">
    <h1>Index</h1>
    <p>Animations with React Router are not different than any other animation.</p>
  </div>
    )
  }
}

SummaryUserIndex.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (props) => {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryUserIndex)