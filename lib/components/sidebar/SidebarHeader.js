'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Theme = require('../Theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarHeader = function SidebarHeader(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { style: styles().wrapper },
    children
  );
};

var styles = function styles() {
  return {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: 100,
      padding: 20,
      backgroundColor: (0, _Theme.getTheme)().palette.primary1Color,
      color: 'white',
      boxSizing: 'border-box'
    }
  };
};

exports.default = SidebarHeader;