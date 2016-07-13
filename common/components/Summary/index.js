module.exports = {
  path: 'summary',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Summary'))
    })
  }
}
