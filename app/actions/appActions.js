var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var hexActions = {
  checkValidHex: function(value) {
    AppDispatcher.handleAction({
      actionType: appConstants.CHECK_HEX_VALUE,
      data: value
    });
  },

  renderColor: function(value) {
    AppDispatcher.handleAction({
      actionType: appConstants.RENDER_COLOR,
      data: value
    });
  }
};

module.exports = hexActions;
