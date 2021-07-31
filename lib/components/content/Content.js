'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding-top: ', ';\n  padding-left: 0px;\n  transition-property: padding;\n  transition-duration: 300ms;\n\n  @media(min-width: ', 'px) {\n    padding-left: ', ';\n  }\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  padding-top: ', ';\n  padding-left: 0px;\n  transition-property: padding;\n  transition-duration: 300ms;\n\n  @media(min-width: ', 'px) {\n    padding-left: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactRedux = require('react-redux');

var _Theme = require('../Theme');

var _Responsive = require('../Responsive');

var _ContentBody = require('./ContentBody');

var _ContentBody2 = _interopRequireDefault(_ContentBody);

var _ContentHeader = require('./ContentHeader');

var _ContentHeader2 = _interopRequireDefault(_ContentHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function () {
  return (0, _Theme.getTheme)().appBar.height + 'px';
}, _Responsive.VIEWPORT.MEDIUM, function (props) {
  return props.sidebar.visible ? (0, _Theme.getTheme)().drawer.width + 'px' : 0;
});

var Content = function Content(_ref) {
  var sidebar = _ref.sidebar,
      style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    Wrapper,
    { sidebar: sidebar, style: style },
    _react2.default.createElement(
      'div',
      { style: styles().content },
      children
    )
  );
};

Content.Body = _ContentBody2.default;
Content.Header = _ContentHeader2.default;

var styles = function styles() {
  return {
    content: {
      position: 'relative',
      boxSizing: 'border-box',
      width: '100%',
      minHeight: '100%',
      flexGrow: 1
    }
  };
};

Content.defaultProps = {
  style: {}
};

Content.propTypes = {
  style: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    sidebar: state.sidebar
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Content);