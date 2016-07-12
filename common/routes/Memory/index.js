module.exports = {
  path: 'memory',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Memory'))
    })
  }
}
