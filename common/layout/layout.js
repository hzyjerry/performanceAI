var React = require('react');
//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var Navigation = require('../components/GlobalNav.js');

var DefaultLayout = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render() {
    return (
      <div>
        <div className="l-header">
          <h1>Company Name</h1>
          <Navigation />
        </div>
        <div className="l-content">
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
        <div className="l-footer">
          <p>Copyright (c) 2014 Company Name</p>
        </div>
      </div>
    );
  },
  componentDidMount() {
    //if (ExecutionEnvironment.canUseDOM) {
    document.title = this.props.title;
    //}
  }
});

module.exports = DefaultLayout;