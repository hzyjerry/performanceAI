import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../components/App'
import * as CounterActions from '../actions'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
