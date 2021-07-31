'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  > div {\n    > div:nth-child(2) > div {\n      transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;\n    }\n\n    @media(max-width: ', 'px) {\n      > div:nth-child(1) {\n        flex-direction: column;\n\n        button {\n          width: 100% !important;\n        }\n      }\n\n      > div:nth-child(2) > div {\n        left: 0 !important;\n        width: 100% !important;\n        top: -', 'px\n      }\n    }\n  }\n'], ['\n  > div {\n    > div:nth-child(2) > div {\n      transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms !important;\n    }\n\n    @media(max-width: ', 'px) {\n      > div:nth-child(1) {\n        flex-direction: column;\n\n        button {\n          width: 100% !important;\n        }\n      }\n\n      > div:nth-child(2) > div {\n        left: 0 !important;\n        width: 100% !important;\n        top: -', 'px\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Tabs = require('material-ui/Tabs');

var _Responsive = require('../Responsive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, _Responsive.VIEWPORT.MEDIUM, function (props) {
  return (props.tabsCount - props.selectedIndex - 1) * 48;
});

var CustomTabs = function CustomTabs(props) {
  return _react2.default.createElement(
    Wrapper,
    { selectedIndex: props.initialSelectedIndex, tabsCount: props.children.length },
    _react2.default.createElement(_Tabs.Tabs, props)
  );
};

exports.default = CustomTabs;