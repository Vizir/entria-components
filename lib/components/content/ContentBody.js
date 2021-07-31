'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: 20px;\n\n  @media(min-width: ', 'px) {\n    padding: 40px;\n  }\n'], ['\n  padding: 20px;\n\n  @media(min-width: ', 'px) {\n    padding: 40px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Responsive = require('../Responsive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, _Responsive.VIEWPORT.MEDIUM);

var ContentBody = function ContentBody(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    Wrapper,
    { style: style },
    children
  );
};

ContentBody.defaultProps = {
  style: {}
};

ContentBody.propTypes = {
  style: _propTypes2.default.object
};

exports.default = ContentBody;