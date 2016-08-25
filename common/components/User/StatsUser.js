import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'

class StatsUser extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div className="row">
        <div className="col-lg-12">
          <h1 className="page-header">
              Upload <small>Select means of uploading your performance file</small>
          </h1>
          <div className="col-lg-10">
            <div className="panel panel-default">

                <div className="panel-heading nav navbar-default">
                    <div className="row">
                        <ul className="nav navbar-nav">
                          <li className="active"><a href="#" className="">Manual Upload<span className="sr-only">(current)</span></a>
                          </li>
                          <li><a href="#" className="">Exisiting Builds</a>
                          </li>
                          <li><a href="#" className="">PerfCI Dashboard</a>

                            <ul className="dropdown-menu">
                              <li><a href="#" className="">Action</a>
                              </li>
                              <li><a href="#" className="">Another action</a>
                              </li>
                              <li><a href="#" className="">Something else here</a>
                              </li>
                              <li role="separator" className="divider"></li>
                              <li><a href="#" className="">Separated link</a>
                              </li>
                              <li role="separator" className="divider"></li>
                              <li><a href="#" className="">One more separated link</a>
                              </li>
                        </ul>
                        </li>
                        </ul>
                      
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

StatsUser.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(StatsUser)