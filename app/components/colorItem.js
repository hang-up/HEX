var React = require('react');
var hexActions = require('../actions/appActions');

var ColorItem = React.createClass({
  renderColor: function(value) {
    hexActions.renderColor(value);
  },

  render: function() {
    return (
      <div
        className = "color-history-item"
        data-color = {this.props.color}
        onClick = {this.renderColor}>
        {this.props.color}
      </div>
    );
  }
});

module.exports = ColorItem;
