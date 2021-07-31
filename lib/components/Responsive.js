'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLarge = exports.isMedium = exports.isSmall = exports.VIEWPORT = undefined;

var _Theme = require('./Theme');

var VIEWPORT = exports.VIEWPORT = {
  SMALL: (0, _Theme.getTheme)().responsive.small || 480,
  MEDIUM: (0, _Theme.getTheme)().responsive.medium || 768
};
var isSmall = exports.isSmall = function isSmall() {
  return window.innerWidth <= VIEWPORT.SMALL;
};

var isMedium = exports.isMedium = function isMedium() {
  return !isSmall() && window.innerWidth <= VIEWPORT.MEDIUM;
};

var isLarge = exports.isLarge = function isLarge() {
  return !isMedium() && window.innerWidth > VIEWPORT.MEDIUM;
};