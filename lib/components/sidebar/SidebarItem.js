'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _List = require('material-ui/List');

var _reactRedux = require('react-redux');

var _Sidebar = require('../../ducks/Sidebar');

var _Responsive = require('../Responsive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidebarItem = function SidebarItem(_ref) {
  var link = _ref.link,
      style = _ref.style,
      activeStyle = _ref.activeStyle,
      exact = _ref.exact,
      external = _ref.external,
      target = _ref.target,
      sidebar = _ref.sidebar,
      actions = _ref.actions,
      children = _ref.children;

  if (external) {
    return _react2.default.createElement(
      'a',
      { href: link, style: _extends({}, styles().link, style), target: target },
      _react2.default.createElement(
        _List.ListItem,
        { style: styles().listItem },
        children
      )
    );
  }

  return _react2.default.createElement(
    _reactRouterDom.NavLink,
    {
      to: link,
      style: _extends({}, styles().link, style),
      activeStyle: _extends({}, styles().activeLink, activeStyle),
      exact: exact,
      onClick: function onClick() {
        if (!(0, _Responsive.isLarge)() && sidebar.visible) {
          actions.toggleSidebar();
        }
      }
    },
    _react2.default.createElement(
      _List.ListItem,
      { style: styles().listItem },
      children
    )
  );
};

var styles = function styles() {
  return {
    link: {
      transition: 'all 100ms linear',
      textDecoration: 'none'
    },
    activeLink: {
      display: 'block'
    },
    listItem: {
      color: 'inherit'
    }
  };
};

SidebarItem.defaultProps = {
  style: {},
  activeStyle: {},
  exact: true,
  external: false,
  target: '_blank'
};

SidebarItem.propTypes = {
  link: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  activeStyle: _propTypes2.default.object,
  exact: _propTypes2.default.bool,
  external: _propTypes2.default.bool,
  target: _propTypes2.default.string
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sidebar: state.sidebar
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: {
      toggleSidebar: function toggleSidebar() {
        return dispatch((0, _Sidebar.toggleSidebar)());
      }
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SidebarItem);