module.exports = {
  path: 'network',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Network'))
    })
  }
}
