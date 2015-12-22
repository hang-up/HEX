var React = require('react');
var ColorField = require('./ColorField');
var hexActions = require('../actions/appActions');
var ColorItem = require('./ColorItem');

var ColorCanvas = React.createClass({
  salt: function() {
    return Math.random().toString(36).substring(7);
  },

  render: function() {
    var history = this.props.history.map(function(item) {
      return <li key={item + this.salt()}> <ColorItem color={item}/> </li>;
    }.bind(this));

    return (
      <div className="color-canvas">
        <ColorField/>

        <div className="color-history-wrap hidden">
          <h4 className="title">Previous search</h4>
          <div className='divider'></div>
          <ul className="color-history">
            {history}
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = ColorCanvas;
