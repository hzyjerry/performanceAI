module.exports = {
  path: 'tps',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/TPS'))
    })
  }
}
