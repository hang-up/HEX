var React = require('react');
var ReactDOM = require('react-dom');
var ColorCanvas = require('./components/colorCanvas');
var hexStore = require('./stores/appStore');

var App = React.createClass({
  getInitialState: function() {
    return {
      history: hexStore.getHistory()
    };
  },

  componentDidMount: function() {
    hexStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    hexStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      history: hexStore.getHistory()
    });
  },

  render: function() {
    return (
      <div>
        <ColorCanvas history={this.state.history}/>
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
