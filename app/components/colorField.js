var React = require('react');
var ReactDOM = require('react-dom');
var hexActions = require('../actions/appActions');

var ColorField = React.createClass({
  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.colorField).focus();
  },

  handleChange: function(value) {
    hexActions.checkValidHex(value)
  },

  render: function() {
    return (
      <div className="color-field">
        <input type="text" ref="colorField" pattern="/^#[0-9a-f]{3,6}$/i" onChange={this.handleChange}/>
      </div>
    );
  }
});

module.exports = ColorField;
