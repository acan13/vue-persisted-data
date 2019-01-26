"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hydrate = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.is-array");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _hydrate(dataValue, structureValue) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (dataValue === undefined) {
    return structureValue;
  }

  if (_typeof(dataValue) !== _typeof(structureValue)) {
    return structureValue;
  }

  if (Array.isArray(dataValue) !== Array.isArray(structureValue)) {
    return structureValue;
  }

  if (Array.isArray(structureValue)) {
    return dataValue;
  }

  if (_typeof(structureValue) !== 'object') {
    return dataValue;
  }

  var hydratedObject = {};

  var _arr = Object.keys(structureValue);

  for (var _i = 0; _i < _arr.length; _i++) {
    var key = _arr[_i];
    hydratedObject[key] = hydrate(dataValue[key], structureValue[key]);
  }

  return hydratedObject;
}

var hydrate = _hydrate;
exports.hydrate = hydrate;