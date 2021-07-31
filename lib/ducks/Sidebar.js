'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
exports.toggleSidebar = toggleSidebar;

var _Responsive = require('../components/Responsive');

var LOCAL_STORAGE_SIDEBAR = 'entria-components-v1-sidebarVisible';

// Actions
var TOGGLE = 'entria-components/Sidebar/TOGGLE';

// Reducer


var initialState = {
  visible: (0, _Responsive.isLarge)() ? localStorage.getItem(LOCAL_STORAGE_SIDEBAR) !== 'false' : false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case TOGGLE:
      {
        var _visible = !state.visible;

        localStorage.setItem(LOCAL_STORAGE_SIDEBAR, _visible);

        return _extends({}, state, {
          visible: _visible
        });
      }
    default:
      return state;
  }
}

// Action Creators
function toggleSidebar() {
  return { type: TOGGLE };
}