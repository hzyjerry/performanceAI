import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory, Router, Route, Link } from 'react-router'
import { Nav, NavItem} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class SummaryUser extends Component {
  render() {
    const { onClick } = this.props
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
          <div>
            {this.props.children}
          </div>
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