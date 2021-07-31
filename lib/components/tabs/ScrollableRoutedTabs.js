'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _Tabs = require('material-ui-scrollable-tabs/Tabs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScrollableRoutedTabs = function ScrollableRoutedTabs(_ref) {
  var tabs = _ref.tabs,
      location = _ref.location,
      history = _ref.history;

  var initialSelectedIndex = 0;
  tabs.forEach(function (tab, tabIndex) {
    if (tab.route === location.pathname) {
      initialSelectedIndex = tabIndex;
    }
  });

  return _react2.default.createElement(
    _Tabs.Tabs,
    { initialSelectedIndex: initialSelectedIndex, tabType: 'scrollable-buttons' },
    tabs.map(function (tab, tabIndex) {
      return _react2.default.createElement(
        _Tabs.Tab,
        { key: tab.label, label: tab.label, onActive: function onActive() {
            return history.replace(tab.route);
          } },
        tabIndex === initialSelectedIndex ? tab.component : null
      );
    })
  );
};

ScrollableRoutedTabs.propTypes = {
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    route: _propTypes2.default.string,
    label: _propTypes2.default.string,
    component: _propTypes2.default.node
  })).isRequired
};

exports.default = (0, _reactRouterDom.withRouter)(ScrollableRoutedTabs);