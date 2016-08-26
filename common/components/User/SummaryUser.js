import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { RouteTransition } from 'react-router-transition';

import './summary.css'


const Index = () => (
  <div className="Image">
    <h1>Index</h1>
    <p>Animations with React Router are not different than any other animation.</p>
  </div>
)

class SummaryUser extends Component {
  render() {
    const pathname = this.props.location.pathname
    return (
      <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">
                    Analytics Summary <small>Benchmark APIPlatform Build #400</small>
                </h1>
            </div>
        </div>

        <div className="jumbotron">
            <h2>Bottleneck: CPU Bound</h2>
            <p>There were a few dips and spikes, caused by disk flush for the dirty pages, resulted in intermittent long gc pauses. The impact of these spikes and dips were minimal, and could be smoothed out if switched to CMS GC. 
            Recommended to review application for excessive disk writes. </p>
            <p><a href="#" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</a>
            </p>
        </div>
        <div>

          <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
            <LinkContainer to={{ pathname: "/v2/user/analytics/summary/overview"}}>
              <NavItem eventKey="1">Overview</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: "/v2/user/analytics/summary/detailed"}}>
              <NavItem eventKey="2">Detailed</NavItem>
            </LinkContainer>
          </Nav>

          <br/>
          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            runOnMount={false}
          >
            {this.props.children}
          </RouteTransition>
        </div>

      </div>
    )
  }
}

SummaryUser.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SummaryUser)