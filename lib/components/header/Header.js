'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Theme = require('../Theme');

var _HeaderBrand = require('./HeaderBrand');

var _HeaderBrand2 = _interopRequireDefault(_HeaderBrand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var left = _ref.left,
      title = _ref.title,
      right = _ref.right,
      style = _ref.style,
      leftStyle = _ref.leftStyle,
      titleStyle = _ref.titleStyle,
      rightStyle = _ref.rightStyle;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AppBar2.default, {
      iconElementLeft: left,
      iconStyleLeft: _extends({}, styles().left, leftStyle),
      title: title,
      titleStyle: _extends({}, styles().title, titleStyle),
      iconElementRight: right,
      iconStyleRight: _extends({}, styles().right, rightStyle),
      showMenuIconButton: left !== null,
      style: _extends({}, styles().wrapper, style)
    })
  );
};

Header.Brand = _HeaderBrand2.default;

var styles = function styles() {
  return {
    wrapper: {
      position: 'fixed',
      top: 0,
      zIndex: 1400,
      boxShadow: 'rgba(0, 0, 0, 0.004) 0px 5px 10px, rgba(0, 0, 0, 0.1) 0px 8px 20px',
      overflow: 'hidden'
    },
    left: {
      width: (0, _Theme.getTheme)().drawer.width,
      height: (0, _Theme.getTheme)().appBar.height,
      margin: 0,
      padding: 20,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      height: (0, _Theme.getTheme)().appBar.height,
      margin: 0,
      padding: 20,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: 'initial'
    },
    right: {
      width: (0, _Theme.getTheme)().drawer.width,
      height: (0, _Theme.getTheme)().appBar.height,
      margin: 0,
      padding: 20,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  };
};

Header.defaultProps = {
  style: {},
  leftStyle: {},
  titleStyle: {},
  rightStyle: {},
  left: null,
  title: null,
  right: null
};

Header.propTypes = {
  style: _propTypes2.default.object,
  leftStyle: _propTypes2.default.object,
  titleStyle: _propTypes2.default.object,
  rightStyle: _propTypes2.default.object,
  left: _propTypes2.default.node,
  title: _propTypes2.default.node,
  right: _propTypes2.default.node
};

exports.default = Header;