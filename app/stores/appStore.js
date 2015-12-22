var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');

var CHANGE_EVENT = 'change';


/**
  TODO:
  - persist history in localStorage; get rid of the history array in _store.
  - make past element from history deletable
**/

var _store = {
  history: []
};


var setCanvasColor = function(value) {
  document.getElementById('app').style.backgroundColor = value;
};

var checkValidHex = function(value) {
   if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test('#' + value.target.value))
   {
     _store.history.push(value.target.value);
     setCanvasColor('#' + value.target.value);
     setHistoryVisible();
   }
   else {
     console.log("not appropriate hex value!");
   }
};

var setHistoryVisible = function() {
  $(".color-history-wrap").fadeIn();
}

var hexStore = objectAssign({}, EventEmitter.prototype, {
  getHistory: function() {
    return _store.history;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch (action.actionType) {
    case appConstants.CHECK_HEX_VALUE:
      checkValidHex(action.data);
      hexStore.emitChange();
      break;

    case appConstants.RENDER_COLOR:
      setCanvasColor('#' + action.data.target.dataset.color);
      hexStore.emitChange();
      break;

    default:
      return true;
  }
});

module.exports = hexStore;
